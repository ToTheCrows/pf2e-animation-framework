/**
 * PF2e Animation Framework - Version 2.3.0
 * Core Engine: Centered Focus, Condition Escalation & Damage Impacts.
 */

import { ANIMATIONS } from './scripts/animation-map.js';
import { BOMB_DATA } from './scripts/bomb-data.js';
import { COMPLEX_ANIMATIONS } from './scripts/complex-logic.js';
import { SELF_EFFECTS, PROJECTILES, BURSTS, PERSISTENT_TAGS, CONDITION_CHAINS, DAMAGE_IMPACTS } from './scripts/constants.js';

const FRAMEWORK_REGISTRY = new Map();
let ANIM_INDEX = {};

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => { ANIM_INDEX[subKey] = subVal; });
        });
    });
    console.log(`PF2e Animation Framework | v2.3.0: Engine geladen. Impact-System bereit.`);
});

function playPersistentAnimation(token, animKey, itemSlug, radiusValue = 0, isAura = false) {
    Sequencer.EffectManager.endEffects({ name: `Persist-${token.id}-${itemSlug}` });

    // Eskalations-Logik für Conditions
    const chain = CONDITION_CHAINS.find(c => c.includes(itemSlug));
    if (chain) {
        chain.forEach(otherSlug => {
            if (otherSlug !== itemSlug) {
                Sequencer.EffectManager.endEffects({ name: `Persist-${token.id}-${otherSlug}` });
                FRAMEWORK_REGISTRY.get(token.id)?.delete(otherSlug);
            }
        });
    }

    if (COMPLEX_ANIMATIONS[itemSlug]) {
        if (!FRAMEWORK_REGISTRY.has(token.id)) FRAMEWORK_REGISTRY.set(token.id, new Set());
        if (FRAMEWORK_REGISTRY.get(token.id).has(itemSlug)) return;
        FRAMEWORK_REGISTRY.get(token.id).add(itemSlug);
        let seq = new Sequence({ moduleName: "PF2e Animation Framework" });
        COMPLEX_ANIMATIONS[itemSlug](seq, token);
        seq.play();
        return;
    }

    const gridDist = canvas.scene.grid.distance || 5;
    const safeRadius = Number(radiusValue) || 0;
    const tokenWidthFt = token.document.width * gridDist;
    const auraScale = isAura ? ((safeRadius * 2) + tokenWidthFt) / tokenWidthFt : 1.2;

    if (!FRAMEWORK_REGISTRY.has(token.id)) FRAMEWORK_REGISTRY.set(token.id, new Set());
    FRAMEWORK_REGISTRY.get(token.id).add(itemSlug);

    const isCurrent = game.combat?.combatant?.tokenId === token.id;

    new Sequence()
        .effect().file(animKey).attachTo(token).scaleToObject(auraScale).persist()
        .origin("PF2e-Anim-Framework").name(`Persist-${token.id}-${itemSlug}`)
        .fadeIn(1000).opacity(isCurrent ? 1.0 : 0.4)
        .loopProperty("sprite", "alpha", { from: 0.2, to: 0.5, duration: 3000, pingpong: true }).play();
}

Hooks.on("createItem", (item, options, userId) => {
    if (game.user.id !== userId) return;
    const token = item.parent?.getActiveTokens()[0];
    if (!token) return;
    const itemSlug = item.slug || "";
    const animKey = findInIndex(itemSlug);
    if (!animKey && !COMPLEX_ANIMATIONS[itemSlug]) return;
    if (animKey && !PERSISTENT_TAGS.some(tag => itemSlug.includes(tag))) return;
    let radius = item.system.rules?.find(r => r.key === "Aura")?.radius || item.system.area?.value || item.flags.pf2e?.rulesArea?.radius || 0;
    const isAura = radius > 0 || item.system.traits?.value?.includes("aura") || item.name.toLowerCase().includes("aura");
    if (isAura && radius === 0) radius = 5;
    playPersistentAnimation(token, animKey, itemSlug, radius, isAura);
});

Hooks.on("deleteItem", (item, options, userId) => {
    if (game.user.id !== userId) return;
    const actor = item.parent;
    const token = actor?.getActiveTokens()[0];
    if (!token) return;
    const itemSlug = item.slug || "";
    setTimeout(() => {
        const stillExists = actor.items.some(i => i.slug === itemSlug || i.name === item.name);
        if (!stillExists) {
            Sequencer.EffectManager.endEffects({ name: `Persist-${token.id}-${itemSlug}` });
            Sequencer.EffectManager.endEffects({ name: `Persist-${token.id}-${item.name}` });
            FRAMEWORK_REGISTRY.get(token.id)?.delete(itemSlug);
        }
    }, 150);
});

Hooks.on("updateCombat", (combat) => {
    const currentTokenId = combat.combatant?.tokenId;
    if (!currentTokenId) return;
    FRAMEWORK_REGISTRY.forEach((slugs, tokenId) => {
        const isCurrent = tokenId === currentTokenId;
        slugs.forEach(slug => {
            Sequencer.EffectManager.getEffects({ name: `Persist-${tokenId}-${slug}` })
                .forEach(e => e.update({ alpha: isCurrent ? 1.0 : 0.4 }));
        });
    });
});

const findInIndex = (key) => {
    if (!key) return null;
    const s = key.toLowerCase();
    if (ANIM_INDEX[s]) return ANIM_INDEX[s];
    const fuzzyKey = Object.keys(ANIM_INDEX).find(k => s.includes(k) && k.length > 3);
    return fuzzyKey ? ANIM_INDEX[fuzzyKey] : null;
};

Hooks.on("createChatMessage", async (message, options, userId) => {
    if (game.user.id !== userId) return;

    // --- DAMAGE IMPACT LOGIK ---
    if (message.isDamageRoll || message.flags.pf2e?.context?.type === "damage-roll") {
        const damageType = message.rolls[0]?.instances[0]?.type || "slashing";
        const impact = DAMAGE_IMPACTS[damageType] || DAMAGE_IMPACTS["default"];

        game.user.targets.forEach(target => {
            new Sequence({ moduleName: "PF2e Animation Framework" })
                .effect().file(impact.file).atLocation(target).scaleToObject(impact.scale)
                .belowTokens(impact.below || false).fadeIn(200).fadeOut(500).duration(1200).play();
        });
        return;
    }

    const sourceToken = canvas.tokens.get(message.speaker.token) || canvas.tokens.placeables.find(t => t.actor?.id === message.speaker.actor);
    if (!sourceToken) return;
    let item = message.item || (message.flags.pf2e?.origin?.uuid ? await fromUuid(message.flags.pf2e.origin.uuid) : null);
    if (!item) return;
    const itemSlug = item.slug || "";

    if (BOMB_DATA[itemSlug]) {
        const target = Array.from(game.user.targets)[0] || sourceToken;
        let seq = new Sequence({ moduleName: "PF2e Animation Framework" });
        COMPLEX_ANIMATIONS["bomb-logic"](seq, sourceToken, target, BOMB_DATA[itemSlug], 5);
        seq.play();
        return;
    }

    if (COMPLEX_ANIMATIONS[itemSlug] && PERSISTENT_TAGS.includes(itemSlug)) return;
    if (COMPLEX_ANIMATIONS[itemSlug]) {
        let seq = new Sequence({ moduleName: "PF2e Animation Framework" });
        COMPLEX_ANIMATIONS[itemSlug](seq, sourceToken);
        seq.play();
        return;
    }

    const isKnownProj = PROJECTILES.some(p => itemSlug.includes(p));
    let animKey = findInIndex(itemSlug) || findInIndex(item.name);
    if (!animKey || PERSISTENT_TAGS.some(tag => itemSlug.includes(tag))) return;

    const flavor = (message.flavor || "").toLowerCase();
    const isCrit = flavor.includes("critical") || flavor.includes("kritisch");
    const isSelf = !isKnownProj && (SELF_EFFECTS.some(se => itemSlug.includes(se)) || (game.user.targets.size === 0 && item.type === "spell"));
    const isBurst = BURSTS.some(b => itemSlug.includes(b));
    const finalTargets = isSelf ? [sourceToken] : Array.from(game.user.targets);

    let seq = new Sequence();
    finalTargets.forEach(t => {
        let effect = seq.effect().file(animKey);
        if (isSelf || isBurst) {
            effect.atLocation(t).scaleToObject(1.5).fadeIn(400).fadeOut(400);
        } else {
            effect.atLocation(sourceToken).stretchTo(t).playbackRate(1.2);
            if (isCrit) effect.scale(1.5);
        }
    });
    seq.play();
});