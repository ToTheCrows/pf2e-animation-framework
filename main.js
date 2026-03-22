/**
 * PF2e Animation Framework
 * Version 1.8.2 - "The Third Circle"
 * Master Grimoire: Massive Level 3 Spell Support & Iron Bridge Logic.
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
        "sneak-attack": "jb2a.impact.011.yellow"
    },
    classes: {
        fighter: { "power-attack": "jb2a.impact.010.orange", "shield-bash": "jb2a.impact.007.white", "reactive-strike": "jb2a.melee_generic.slashing.two_handed" },
        monk: { "flurry-of-blows": "jb2a.melee_generic.creature_attack.fist.001.yellow.0", "ki-strike": "jb2a.impact.001.blue" },
        cleric: { "raise-a-shield": "jb2a.markers.shield.blue.02", "divine-font": "jb2a.healing_generic.burst.yellowwhite" }
    },
    spells: {
        level1: { "force-barrage": "jb2a.magic_missile.purple", "magic-missile": "jb2a.magic_missile.purple", "heal": "jb2a.healing_generic.burst.bluewhite", "shield": "jb2a.markers.shield.blue.02" },
        level2: { "flaming-sphere": "jb2a.flaming_sphere.01.orange", "shatter": "jb2a.shatter.01.yellow" },
        level3: {
            "fireball": "jb2a.fireball.01.orange",
            "lightning-bolt": "jb2a.lightning_bolt.01.blue",
            "agonizing-despair": "jb2a.phantasmal_killer.01.purple",
            "blindness": "jb2a.dazzle.01.white",
            "vampiric-feast": "jb2a.vampiric_touch.01.purple",
            "haste": "jb2a.magic_signs.circle.02.transmutation.intro.yellow",
            "slow": "jb2a.magic_signs.circle.02.transmutation.intro.blue",
            "paralyze": "jb2a.hold_person.01.blue",
            "stinking-cloud": "jb2a.fog_cloud.02.green",
            "gravity-well": "jb2a.implosion.01.blue",
            "wall-of-thorns": "jb2a.wall_of_thorns.01",
            "wall-of-water": "jb2a.wall_of_water.01",
            "wall-of-wind": "jb2a.wind_directional.white",
            "earthbind": "jb2a.entangle.01.yellow",
            "shared-invisibility": "jb2a.invisibility.01.blue",
            "time-jump": "jb2a.misty_step.01.blue",
            "aqueous-orb": "jb2a.liquid.splash.blue",
            "blister-bomb": "jb2a.liquid.splash.red",
            "crashing-wave": "jb2a.tidal_wave.01.blue",
            "hypnotize": "jb2a.hypnotic_pattern.01.rainbow",
            "rouse-skeletons": "jb2a.arms_of_hadar.01.purple",
            "elemental-annihilation-wave": "jb2a.burning_hands.01.orange",
            "ghostly-weapon": "jb2a.magic_signs.circle.01.enchantment.intro.blue",
            "echo-jump": "jb2a.misty_step.02.purple",
            "magical-fetters": "jb2a.entangle.01.blue",
            "bracing-tendrils": "jb2a.magic_signs.circle.01.abjuration.intro.blue"
        }
    },
    conditions: { "frightened": "jb2a.magic_signs.circle.02.necromancy.intro.dark_purple", "prone": "jb2a.impact.01.white" }
};

let ANIM_INDEX = {};
const SELF_EFFECTS = ["shield", "raise-a-shield", "bless", "bane", "rage", "hunt-prey", "wild-shape", "haste", "shared-invisibility", "time-jump", "bracing-tendrils"];
const PROJECTILES = ["force-barrage", "magic-missile", "fireball", "lightning-bolt", "searing-light", "firearm-strike", "chakram", "blister-bomb", "magical-fetters"];
const BURSTS = ["heal", "healing", "shatter", "divine-font", "stinking-cloud", "gravity-well", "hypnotize", "elemental-annihilation-wave", "rouse-skeletons", "crashing-wave", "agonizing-despair", "vampiric-feast"];

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => { ANIM_INDEX[subKey] = subVal; });
        });
    });
    console.log("PF2e Animation Framework | 1.8.2: The Third Circle indexed.");
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

    let animKey = findInIndex(itemSlug) || findInIndex(item.name);
    if (!animKey) return;

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