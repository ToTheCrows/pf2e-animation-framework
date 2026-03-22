/**
 * PF2e Animation Framework
 * Version 1.7.0 - "The Weapon Master's Arsenal"
 * Master Grimoire: Specific Weapon Slugs, Clean Logic, Multi-Target Support.
 */

const ANIMATIONS = {
    // Nahkampf-Waffen (Slugs direkt aus dem System)
    melee: {
        "longsword": "jb2a.melee_generic.slashing.one_handed",
        "bastard-sword": "jb2a.melee_generic.slashing.two_handed",
        "dagger": "jb2a.melee_generic.piercing.one_handed",
        "rapier": "jb2a.melee_generic.piercing.one_handed",
        "greataxe": "jb2a.melee_generic.slashing.two_handed",
        "greatsword": "jb2a.melee_generic.slashing.two_handed",
        "mace": "jb2a.melee_generic.bludgeoning.one_handed",
        "warhammer": "jb2a.melee_generic.bludgeoning.one_handed",
        "fist": "jb2a.melee_generic.creature_attack.fist.001.yellow.0",
        "sneak-attack": "jb2a.impact.011.yellow"
    },
    classes: {
        fighter: { "power-attack": "jb2a.impact.010.orange", "shield-bash": "jb2a.impact.007.white", "reactive-strike": "jb2a.melee_generic.slashing.two_handed" },
        monk: { "flurry-of-blows": "jb2a.melee_generic.creature_attack.fist.001.yellow.0", "ki-strike": "jb2a.impact.001.blue" },
        barbarian: { "rage": "jb2a.ground_cracks.02.orange", "sudden-charge": "jb2a.impact.01.yellow" },
        ranger: { "hunt-prey": "jb2a.magic_signs.circle.02.divination.intro.green" },
        cleric: { "raise-a-shield": "jb2a.markers.shield.blue.02", "divine-font": "jb2a.healing_generic.burst.yellowwhite" },
        mage: { "arcane-cascade": "jb2a.antilife_shell.blue_with_circle" }
    },
    spells: {
        level1: { "force-barrage": "jb2a.magic_missile.purple", "magic-missile": "jb2a.magic_missile.purple", "heal": "jb2a.healing_generic.burst.bluewhite", "shield": "jb2a.markers.shield.blue.02" },
        level2: { "flaming-sphere": "jb2a.flaming_sphere.01.orange", "shatter": "jb2a.shatter.01.yellow" },
        level3: { "fireball": "jb2a.fireball.01.orange" }
    },
    conditions: { "frightened": "jb2a.magic_signs.circle.02.necromancy.intro.dark_purple", "prone": "jb2a.impact.01.white" }
};

let ANIM_INDEX = {};
const SELF_EFFECTS = ["shield", "raise-a-shield", "bless", "bane", "rage", "hunt-prey", "wild-shape", "haste"];
const PROJECTILES = ["force-barrage", "magic-missile", "fireball", "lightning-bolt", "searing-light", "firearm-strike"];
const BURSTS = ["heal", "healing", "shatter", "divine-font", "bless", "bane"];

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => { ANIM_INDEX[subKey] = subVal; });
        });
    });
    console.log("PF2e Animation Framework | 1.7.0: Arsenal indiziert.");
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
    const isDamage = (message.isDamageRoll || message.flags.pf2e?.context?.type === "damage-roll") && !isKnownProj;
    if (isDamage) return;

    // Rein slug-basierte Suche (item.name als letzter Fallback)
    let animKey = findInIndex(itemSlug) || findInIndex(item.name);

    if (!animKey) return;

    const flavor = (message.flavor || "").toLowerCase();
    const isCrit = flavor.includes("critical success") || flavor.includes("kritischer erfolg");
    const isSelf = SELF_EFFECTS.some(se => itemSlug.includes(se)) || (game.user.targets.size === 0 && item.type === "spell");
    const isBurst = BURSTS.some(b => itemSlug.includes(b));
    const finalTargets = isSelf ? [sourceToken] : Array.from(game.user.targets);

    let seq = new Sequence();
    finalTargets.forEach(t => {
        let effect = seq.effect().file(animKey).atLocation(t);

        if (isKnownProj && t.id !== sourceToken.id) {
            effect.atLocation(sourceToken).stretchTo(t).playbackRate(1.2);
        } else if (isSelf || isBurst) {
            effect.scaleToObject(1.5).fadeIn(400).fadeOut(400);
        } else {
            // Nahkampf-Wucht (2.2 bei Crits, 1.6 normal)
            effect.rotateTowards(sourceToken).scaleToObject(isCrit ? 2.2 : 1.6).playbackRate(1.1);
        }
    });
    seq.play();
});