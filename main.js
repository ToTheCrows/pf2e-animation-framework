/**
 * PF2e Animation Framework
 * Version 1.6.1 - "The Purified Slug"
 * Master Grimoire: Strict Slug Matching, Regex Word Boundaries, V13 Compatibility.
 */

const ANIMATIONS = {
    melee: { slashing: "jb2a.melee_generic.slashing", piercing: "jb2a.melee_generic.piercing", bludgeoning: "jb2a.melee_generic.bludgeoning", "sneak-attack": "jb2a.impact.011.yellow" },
    classes: {
        fighter: { "power-attack": "jb2a.impact.010.orange", "shield-bash": "jb2a.impact.007.white", "reactive-strike": "jb2a.melee_generic.slashing.two_handed" },
        monk: { "flurry-of-blows": "jb2a.melee_generic.creature_attack.fist.001.yellow.0", "ki-strike": "jb2a.impact.001.blue", "mountain-stance": "jb2a.magic_signs.circle.02.transmutation.complete.yellow" },
        barbarian: { "rage": "jb2a.ground_cracks.02.orange", "sudden-charge": "jb2a.impact.01.yellow" },
        ranger: { "hunt-prey": "jb2a.magic_signs.circle.02.divination.intro.green", "gravity-weapon": "jb2a.impact.009.purple" },
        rogue: { "mobility": "jb2a.misty_step.01.blue", "surprise-attack": "jb2a.misty_step.01.green" },
        cleric: { "raise-a-shield": "jb2a.markers.shield.blue.02", "divine-font": "jb2a.healing_generic.burst.yellowwhite" },
        investigator: { "devise-a-stratagem": "jb2a.magic_signs.circle.02.divination.intro.dark_blue" },
        gunslinger: { "firearm-strike": "jb2a.bullet.01.orange", "reload": "jb2a.fumes.steam.white" },
        druid: { "untamed-form": "jb2a.magic_signs.circle.02.transmutation.intro.green", "wild-shape": "jb2a.magic_signs.circle.02.transmutation.intro.green" },
        mage: { "arcane-cascade": "jb2a.antilife_shell.blue_with_circle", "counterspell": "jb2a.magic_signs.circle.02.abjuration.complete.red" }
    },
    spells: {
        level1: { "force-barrage": "jb2a.magic_missile.purple", "magic-missile": "jb2a.magic_missile.purple", "heal": "jb2a.healing_generic.burst.bluewhite", "shield": "jb2a.markers.shield.blue.02", "breathe-fire": "jb2a.burning_hands.01.red" },
        level2: { "sudden-bolt": "jb2a.lightning_bolt.01.blue", "flaming-sphere": "jb2a.flaming_sphere.01.orange", "shatter": "jb2a.shatter.01.yellow" },
        level3: { "fireball": "jb2a.fireball.01.orange", "lightning-bolt": "jb2a.lightning_bolt.01.blue", "haste": "jb2a.magic_signs.circle.02.transmutation.intro.yellow" },
        level4: { "translocate": "jb2a.misty_step.01.blue", "dimension-door": "jb2a.misty_step.01.blue", "stoneskin": "jb2a.magic_signs.circle.01.abjuration.intro.yellow" }
    },
    persistent: { fire: "jb2a.fire_bolt.orange", acid: "jb2a.liquid.splash.green", bleed: "jb2a.impact.01.red", electricity: "jb2a.lightning_bolt.01.blue", poison: "jb2a.fumes.steam.white" },
    conditions: { "frightened": "jb2a.magic_signs.circle.02.necromancy.intro.dark_purple", "sickened": "jb2a.magic_signs.circle.02.conjuration.intro.green", "prone": "jb2a.impact.01.white", "dying": "jb2a.curse.01.dark_purple", "rage": "jb2a.magic_signs.circle.02.enchantment.intro.red" }
};

let ANIM_INDEX = {};

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => {
                ANIM_INDEX[subKey] = subVal;
            });
        });
    });
    console.log(`PF2e Animation Framework | v1.6.1: ${Object.keys(ANIM_INDEX).length} Slugs gereinigt indiziert.`);
});

const SELF_EFFECTS = ["shield", "raise-a-shield", "bless", "bane", "rage", "hunt-prey", "untamed-form", "wild-shape", "mage-armor", "mirror-image", "barkskin", "invisibility", "haste", "heroism", "stoneskin", "fly", "translocate"];
const PROJECTILES = ["force-barrage", "magic-missile", "sudden-bolt", "fireball", "lightning-bolt", "searing-light", "firearm-strike", "needle-darts", "produce-flame"];

const findInIndex = (key) => {
    if (!key) return null;
    const s = key.toLowerCase();

    // 1. Exakter Match (Höchste Performance & Sicherheit)
    if (ANIM_INDEX[s]) return ANIM_INDEX[s];

    // 2. Wortgrenzen-Match (Verhindert Teilwort-Fehler wie Rage in Barrage)
    const matches = Object.keys(ANIM_INDEX)
        .filter(k => {
            try { return new RegExp(`\\b${k}\\b`, 'i').test(s); } catch(e) { return false; }
        })
        .sort((a, b) => b.length - a.length);

    return matches.length > 0 ? ANIM_INDEX[matches[0]] : null;
};

Hooks.on("createChatMessage", async (message, options, userId) => {
    if (game.user.id !== userId) return;

    // --- CLARITY FILTER ---
    const isDamage = message.isDamageRoll || message.flags.pf2e?.context?.type === "damage-roll";
    const messageType = message.flags.pf2e?.context?.type || "unknown";

    const sourceToken = canvas.tokens.get(message.speaker.token) || canvas.tokens.placeables.find(t => t.actor?.id === message.speaker.actor);
    if (!sourceToken) return;

    let item = message.item;
    if (!item && message.flags.pf2e?.origin?.uuid) item = await fromUuid(message.flags.pf2e.origin.uuid);
    if (!item) return;

    const itemSlug = item.slug || "";
    const itemName = item.name;

    // Bekannte Projektile dürfen den Filter passieren
    const isKnownProj = PROJECTILES.some(p => itemSlug === p || itemSlug.includes(p));
    if (isDamage && !isKnownProj) return;

    let animKey = findInIndex(itemSlug) || findInIndex(itemName);

    // Debug Log zur Kontrolle
    console.log(`PF2e Animation Framework | Slug: ${itemSlug} | Anim: ${animKey}`);

    if (!animKey) return;

    const flavor = (message.flavor || "").toLowerCase();
    const isCrit = flavor.includes("critical success") || flavor.includes("kritischer erfolg");
    let seq = new Sequence();

    const isSelf = SELF_EFFECTS.some(se => itemSlug === se || itemSlug.startsWith(se + "-")) || (Array.from(game.user.targets).length === 0 && item.type === "spell");
    const finalTargets = isSelf ? [sourceToken] : Array.from(game.user.targets);

    finalTargets.forEach(t => {
        let effect = seq.effect().file(animKey).atLocation(t);
        const isProj = PROJECTILES.some(p => itemSlug.includes(p));

        if (itemSlug.includes("untamed-form") || itemSlug.includes("wild-shape")) {
            effect.scaleToObject(2.0).playbackRate(0.8);
        } else if (isProj && t.id !== sourceToken.id) {
            effect.atLocation(sourceToken).stretchTo(t).playbackRate(1.2);
        } else if (isSelf) {
            effect.scaleToObject(1.5).fadeIn(400).fadeOut(400);
        } else {
            effect.rotateTowards(sourceToken).scaleToObject(isCrit ? 2.2 : 1.6).playbackRate(1.1);
        }
    });
    seq.play();
});