/**
 * PF2e Animation Framework
 * Version 1.9.7 - "The Nullification Prism"
 * Master Grimoire: Strict Number Casting for Scale, Radius Sanitation.
 */

const ANIMATIONS = {
    melee: {
        "shortsword": "jb2a.melee_attack.01.shortsword.01.0",
        "longsword": "jb2a.melee_attack.03.greatsword.01.0",
        "bastard-sword": "jb2a.melee_attack.03.greatsword.01.3",
        "dagger": "jb2a.dagger.melee.02.white",
        "rapier": "jb2a.rapier.melee.01.white.2",
        "greataxe": "jb2a.greataxe.melee.standard.white",
        "greatsword": "jb2a.greatsword.melee.standard.white",
        "mace": "jb2a.mace.melee.01.orange.0",
        "warhammer": "jb2a.warhammer.melee.01.orange.4",
        "fist": "jb2a.melee_generic.creature_attack.fist.001.yellow.0",
        "chakram": "jb2a.chakram.01.throw.03",
        "sneak-attack": "jb2a.sneak_attack.dark_green"
    },
    ranged: {
        "longbow": "jb2a.arrow.physical.white.01",
        "shortbow": "jb2a.arrow.physical.white.02",
        "crossbow": "jb2a.bolt.physical.white",
        "hand-crossbow": "jb2a.bolt.physical.white02",
        "heavy-crossbow": "jb2a.bolt.physical.white",
        "pistol": "jb2a.bullet.01.orange",
        "musket": "jb2a.bullet.03.orange",
        "arquebus": "jb2a.bullet.02.orange"
    },
    classes: {
        fighter: { "power-attack": "jb2a.impact.010.orange", "shield-bash": "jb2a.impact.007.white", "reactive-strike": "jb2a.melee_generic.slashing.two_handed" },
        cleric: { "raise-a-shield": "jb2a.markers.shield.blue.02", "divine-font": "jb2a.healing_generic.burst.yellowwhite" },
        barbarian: { "rage": "jb2a.ground_cracks.02.orange" }
    },
    spells: {
        level1: {
            "force-barrage": "jb2a.magic_missile.purple", "magic-missile": "jb2a.magic_missile.purple",
            "heal": "jb2a.healing_generic.burst.bluewhite", "shield": "jb2a.markers.shield.blue.02",
            "acidic-burst": "jb2a.liquid.splash.bright_green", "admonishing-ray": "jb2a.scorching_ray.01.rainbow01",
            "breathe-fire": "jb2a.burning_hands.01.orange", "briny-bolt": "jb2a.bolt.cold.blue",
            "fear": "jb2a.condition.curse.01.006.green", "grim-tendrils": "jb2a.arms_of_hadar.dark_purple",
            "hydraulic-push": "jb2a.liquid.splash.bright_blue", "pummeling-rubble": "jb2a.falling_rocks.side.1x1.grey.1",
            "snowball": "jb2a.snowball_toss.white.01", "thunderstrike": "jb2a.lightning_strike.blue.5",
            "grease": "jb2a.grease.dark_brown.loop", "sleep": "jb2a.sleep.target.dark_orangepurple",
            "guidance": "jb2a.condition.boon.01.005.yellow", "bless": "jb2a.condition.boon.01.002.yellow", "bane": "jb2a.condition.curse.01.001.purple",
            "ray-of-enfeeblement": "jb2a.condition.curse.01.021.red", "runic-weapon": "jb2a.condition.boon.01.010.blue"
        },
        level2: {
            "flaming-sphere": "jb2a.flaming_sphere.200px.orange.02", "shatter": "jb2a.shatter.dark_red",
            "acid-grip": "jb2a.liquid.splash02.green", "animated-assault": "jb2a.shatter.purple",
            "blazing-bolt": "jb2a.fire_bolt.orange", "blur": "jb2a.ambient_fog.001.complete.small.blueteal",
            "boneshaker": "jb2a.impact.002.dark_purple", "enlarge": "jb2a.magic_signs.circle.02.transmutation.intro.yellow",
            "ignite-fireworks": "jb2a.firework.01.orangeyellow.03", "invisibility": "jb2a.fog_cloud.02.white"
        },
        level3: {
            "fireball": "jb2a.fireball.01.orange", "lightning-bolt": "jb2a.lightning_bolt.wide.blue",
            "haste": "jb2a.condition.boon.01.015.yellow", "slow": "jb2a.condition.curse.01.003.purple",
            "heroism": "jb2a.condition.boon.01.004.blue", "crashing-wave": "jb2a.water_splash.circle.01.blue"
        },
        level4: {
            "phantasmal-killer": "jb2a.ambient_fog.001.loop.large.purplered", "fire-shield": "jb2a.shield_themed.above.fire.03.orange",
            "resilient-sphere": "jb2a.wall_of_force.sphere.blue", "wall-of-fire": "jb2a.wall_of_fire.100x100.yellow"
        }
    },
    conditions: {
        "blinded": "jb2a.condition.curse.01.002.purple", "broken": "jb2a.markers.runes.red.01",
        "clumsy": "jb2a.condition.curse.01.008.purple", "concealed": "jb2a.markers.bubble.02.complete.blue.1",
        "confused": "jb2a.markers.stun.purple.03", "controlled": "jb2a.markers.runes.dark_black.02",
        "dazzled": "jb2a.markers.light.complete.green", "deafened": "jb2a.condition.curse.01.018.purple",
        "doomed": "jb2a.condition.curse.01.024.red", "drained": "jb2a.markers.drop.red.03",
        "dying": "jb2a.markers.heart.dark_red.02", "encumbered": "jb2a.markers.chain.standard.loop.02.grey",
        "enfeebled": "jb2a.markers.chain.square.loop.01.purple", "fascinated": "jb2a.eyes.01.single.dark_yellow.0",
        "fatigued": "jb2a.condition.curse.01.013.blue", "off-guard": "jb2a.icon.shield_cracked.dark_red",
        "flat-foot": "jb2a.icon.shield_cracked.dark_red", "fleeing": "jb2a.condition.curse.01.006.green",
        "frightened": "jb2a.condition.curse.01.006.purple", "grabbed": "jb2a.markers.chain.standard.loop.02.yellow",
        "hidden": "jb2a.markers.bubble.intro.blue", "immobilized": "jb2a.markers.chain.standard.loop.02.yellow",
        "invisible": "jb2a.markers.bubble.intro.blue", "observed": "jb2a.eyes.01.orangered.few.2",
        "paralyzed": "jb2a.icon.stun.dark_teal", "persistent-damage": "jb2a.markers.drop.red.01",
        "petrified": "jb2a.ioun_stones.02.white.regeneration", "prone": "jb2a.condition.curse.01.013.red",
        "quickened": "jb2a.condition.boon.01.015.yellow", "restrained": "jb2a.markers.chain.standard.loop.02.red",
        "sickened": "jb2a.condition.curse.01.017.green", "slowed": "jb2a.cast_generic.ice.01.blue.0",
        "stunned": "jb2a.markers.stun.purple.02", "stupefied": "jb2a.markers.stun.purple.03",
        "unconscious": "jb2a.sleep.target.pink", "undetected": "jb2a.markers.bubble.02.complete.grey.2",
        "unfriendly": "jb2a.markers.hazard.red.01", "unnoticed": "jb2a.markers.bubble.02.complete.blue.1",
        "wounded": "jb2a.markers.blood.red.02"
    }
};

let ANIM_INDEX = {};
const SELF_EFFECTS = ["shield", "raise-a-shield", "rage", "hunt-prey", "wild-shape", "haste", "blur", "invisibility", "mirror-image", "fleet-step", "mystic-armor", "enlarge", "disguise", "resist-energy", "fire-shield", "freedom-of-movement", "air-walk", "guidance", "heroism"];
const PROJECTILES = ["force-barrage", "magic-missile", "kraftgeschoss", "admonishing-ray", "briny-bolt", "hydraulic-push", "snowball", "thunderstrike", "blazing-bolt", "sudden-bolt", "fireball", "lightning-bolt", "acid-arrow", "chakram", "enervation", "longbow", "shortbow", "crossbow", "bolt", "pistol", "musket", "arquebus", "bullet", "ray-of-enfeeblement"];
const BURSTS = ["heal", "healing", "shatter", "acidic-burst", "breathe-fire", "grim-tendrils", "pummeling-rubble", "acid-grip", "animated-assault", "boneshaker", "ignite-fireworks", "mist", "noise-blast", "vomit-swarm", "web", "crashing-wave", "hypnotize", "rouse-skeletons", "agonizing-despair", "vampiric-feast", "gravity-well", "stinking-cloud", "fear", "sleep", "confusion", "vital-beacon", "phantasmal-killer", "vampiric-maiden"];
const PERSISTENT_TAGS = ["bless", "bane", "aura", "frightened", "prone", "stunned", "blinded", "confused", "immobilized", "paralyzed", "quickened", "sickened", "heroism", "clumsy", "doomed", "drained", "dying", "enfeebled", "fleeing", "grabbed", "restrained", "slowed", "stupefied", "unconscious", "invisible", "hidden", "off-guard", "flat-foot"];

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => { ANIM_INDEX[subKey] = subVal; });
        });
    });
    console.log(`PF2e Animation Framework | v1.9.7: Index bereit.`);
});

/**
 * Helfer: Spielt persistente Animationen ab
 */
function playPersistentAnimation(token, animKey, itemSlug, radiusValue = 5) {
    const safeRadius = Number(radiusValue) || 5;
    const scale = (safeRadius * 4) / 5;
    const isCurrent = game.combat?.combatant?.tokenId === token.id;

    new Sequence()
        .effect()
        .file(animKey)
        .attachTo(token)
        .scaleToObject(scale)
        .persist()
        .origin("PF2e-Anim-Framework")
        .name(`Persist-${token.id}-${itemSlug}`)
        .fadeIn(1000)
        .opacity(isCurrent ? 1.0 : 0.3)
        .loopProperty("sprite", "alpha", { from: 0.1, to: 0.4, duration: 3000, pingpong: true })
        .play();
}

/**
 * Hook für manuelle Condition/Effekt-Anwendung
 */
Hooks.on("createItem", (item, options, userId) => {
    if (game.user.id !== userId) return;
    const token = item.parent?.getActiveTokens()[0];
    if (!token) return;

    const itemSlug = item.slug || "";
    const animKey = findInIndex(itemSlug);
    if (!animKey || !PERSISTENT_TAGS.some(tag => itemSlug.includes(tag))) return;

    let radius = 5;
    if (item.system.rules) {
        const auraRule = item.system.rules.find(r => r.key === "Aura");
        if (auraRule && auraRule.radius) radius = auraRule.radius;
    } else if (item.system.area?.value) {
        radius = item.system.area.value;
    }

    playPersistentAnimation(token, animKey, itemSlug, radius);
});

/**
 * Cleanup beim Löschen
 */
Hooks.on("deleteItem", (item, options, userId) => {
    if (game.user.id !== userId) return;
    const token = item.parent?.getActiveTokens()[0];
    if (token) {
        Sequencer.EffectManager.endEffects({ name: `Persist-${token.id}-${item.slug}` });
    }
});

/**
 * Turn-Manager
 */
Hooks.on("updateCombat", (combat) => {
    const currentTokenId = combat.combatant?.tokenId;
    if (!currentTokenId) return;

    Sequencer.EffectManager.getEffects({ origin: "PF2e-Anim-Framework" }).forEach(effect => {
        const isCurrentTurn = effect.data.name.includes(currentTokenId);
        effect.update({ alpha: isCurrentTurn ? 1.0 : 0.3 });
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

    const sourceToken = canvas.tokens.get(message.speaker.token) || canvas.tokens.placeables.find(t => t.actor?.id === message.speaker.actor);
    if (!sourceToken) return;

    let item = message.item || (message.flags.pf2e?.origin?.uuid ? await fromUuid(message.flags.pf2e.origin.uuid) : null);
    if (!item) return;

    const itemSlug = item.slug || "";
    const isKnownProj = PROJECTILES.some(p => itemSlug.includes(p));
    if ((message.isDamageRoll || message.flags.pf2e?.context?.type === "damage-roll") && !isKnownProj) return;

    let animKey = findInIndex(itemSlug) || findInIndex(item.name);
    if (!animKey) return;

    const isPersistent = PERSISTENT_TAGS.some(tag => itemSlug.includes(tag));
    if (isPersistent) return;

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