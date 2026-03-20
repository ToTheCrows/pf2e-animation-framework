/**
 * PF2e Animation Framework
 * Version 1.4.1 - "The Restored Legacy"
 * Master Grimoire: Alle Klassen, Zauber Stufe 1-4, Persistent Damage & Condition Pulse.
 */

const ANIMATIONS = {
    // --- PHYSIKALISCHE GRUNDLAGEN ---
    melee: {
        slashing: "jb2a.melee_generic.slashing",
        piercing: "jb2a.melee_generic.piercing",
        bludgeoning: "jb2a.melee_generic.bludgeoning",
        "Sneak Attack": "jb2a.impact.01.yellow",
        "Strategic Strike": "jb2a.magic_signs.circle.01.divination.intro.blue"
    },

    // --- KLASSENSPEZIFISCHE MANÖVER ---
    classes: {
        fighter: {
            "Power Attack": "jb2a.impact.01.yellow", "Shield Bash": "jb2a.impact.01.white",
            "Reactive Strike": "jb2a.melee_generic.slashing", "Knockdown": "jb2a.impact.01.yellow",
            "Vicious Swing": "jb2a.impact.01.yellow", "Combat Grab": "jb2a.impact.01.white"
        },
        monk: {
            "Flurry of Blows": "jb2a.unarmed_strike.physical", "Ki Strike": "jb2a.impact.01.blue",
            "Stunning Fist": "jb2a.magic_signs.circle.01.enchantment.intro.yellow",
            "Mountain Stance": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",
            "Crane Stance": "jb2a.magic_signs.circle.01.divination.intro.white",
            "Ki Blast": "jb2a.shatter.01.blue", "Whirling Throw": "jb2a.wind_directional.white"
        },
        barbarian: {
            "Rage": "jb2a.magic_signs.circle.02.enchantment.intro.red", "Sudden Charge": "jb2a.impact.01.yellow",
            "Terrifying Howl": "jb2a.shatter.01.red", "Thrash": "jb2a.melee_generic.bludgeoning.two_handed",
            "Animal Rage": "jb2a.claws.01.white", "Cleave": "jb2a.melee_generic.slashing.two_handed"
        },
        ranger: {
            "Hunt Prey": "jb2a.magic_signs.circle.02.divination.intro.green", "Gravity Weapon": "jb2a.gravity_fissure.01.purple",
            "Hunted Shot": "jb2a.arrow.physical.white", "Twin Takedown": "jb2a.melee_generic.slashing",
            "Heal Companion": "jb2a.healing_generic.burst.green", "Soothing Mist": "jb2a.fog_cloud.01.white",
            "Crossbow Ace": "jb2a.bolt.physical.white", "Animal Feature": "jb2a.claws.01.white"
        },
        rogue: {
            "Debilitating Strike": "jb2a.curse.02.dark_green", "Mobility": "jb2a.misty_step.01.blue",
            "Surprise Attack": "jb2a.misty_step.01.blue", "Quick Draw": "jb2a.melee_generic.piercing.one_handed"
        },
        cleric: {
            "Raise Shield": "jb2a.markers.shield.blue.02", "Emblazon Armament": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",
            "Sanctify Weapon": "jb2a.spiritual_weapon.sword.yellow", "Divine Font": "jb2a.healing_generic.burst.blue",
            "Holy Blast": "jb2a.shatter.01.yellow"
        },
        investigator: {
            "Devise a Stratagem": "jb2a.magic_signs.circle.02.divination.intro.blue", "Known Weakness": "jb2a.magic_signs.circle.01.divination.intro.white"
        },
        gunslinger: {
            "Firearm Strike": "jb2a.bullet.01.orange", "Reload": "jb2a.fumes.steam.white", "Slinger's Reload": "jb2a.fumes.steam.white"
        },
        druid: {
            "Wild Shape": "jb2a.magic_signs.circle.01.transmutation.intro.green", "Untamed Form": "jb2a.magic_signs.circle.01.transmutation.intro.green",
            "Goodberry": "jb2a.healing_generic.200px.green", "Animal Vision": "jb2a.magic_signs.circle.01.divination.intro.green"
        },
        mage: {
            "Arcane Cascade": "jb2a.magic_signs.circle.02.abjuration.intro.blue", "Counterspell": "jb2a.magic_signs.circle.01.abjuration.intro.red",
            "Drain Bond": "jb2a.magic_signs.circle.01.divination.intro.blue"
        },
        sorcerer: {
            "Dangerous Sorcery": "jb2a.impact.01.orange", "Sorcerous Potency": "jb2a.magic_signs.circle.02.evocation.intro.red"
        }
    },

    spells: {
        level1: {
            "Magic Missile": "jb2a.magic_missile.purple", "Force Barrage": "jb2a.magic_missile.purple",
            "Breathe Fire": "jb2a.burning_hands.01.red", "Burning Hands": "jb2a.burning_hands.01.orange",
            "Heal": "jb2a.healing_generic.burst.blue", "Harm": "jb2a.cast_generic.01.dark_purple.0",
            "Shield": "jb2a.markers.shield.blue.02", "Bless": "jb2a.magic_signs.circle.02.divination.intro.yellow",
            "Bane": "jb2a.magic_signs.circle.02.necromancy.intro.red", "Shocking Grasp": "jb2a.shocking_grasp.01.blue",
            "Thunderstrike": "jb2a.lightning_bolt.01.blue", "Gouging Claw": "jb2a.claws.01.white",
            "Needle Darts": "jb2a.magic_missile.01.white", "Telekinetic Projectile": "jb2a.magic_missile.01.blue",
            "Color Spray": "jb2a.color_spray.01.rainbow", "Spiritual Weapon": "jb2a.spiritual_weapon.sword.yellow",
            "Fear": "jb2a.magic_signs.circle.01.necromancy.intro.dark_purple", "Guidance": "jb2a.magic_signs.circle.02.divination.intro.yellow",
            "Mage Armor": "jb2a.magic_signs.circle.01.abjuration.intro.blue", "Sanctuary": "jb2a.magic_signs.circle.01.abjuration.intro.blue"
        },
        level2: {
            "Sudden Bolt": "jb2a.lightning_bolt.01.blue", "Acid Grip": "jb2a.liquid.splash.green",
            "Flaming Sphere": "jb2a.flaming_sphere.01.orange", "Shatter": "jb2a.shatter.01.yellow",
            "Restoration": "jb2a.healing_generic.burst.yellow", "Barkskin": "jb2a.magic_signs.circle.01.transmutation.intro.green",
            "Mirror Image": "jb2a.mirror_image.01.blue", "Invisibility": "jb2a.misty_step.01.blue",
            "Enlarge": "jb2a.magic_signs.circle.01.transmutation.intro.orange", "Darkness": "jb2a.darkness.01.black",
            "Sound Burst": "jb2a.shatter.01.purple", "Blur": "jb2a.misty_step.01.blue"
        },
        level3: {
            // Offensiv & Schaden
            "Fireball": "jb2a.fireball.01.orange",
            "Lightning Bolt": "jb2a.lightning_bolt.01.blue",
            "Vampiric Touch": "jb2a.vampiric_touch.01.purple",
            "Vampiric Feast": "jb2a.vampiric_touch.01.purple",
            "Chilling Darkness": "jb2a.ray.01.dark_purple",
            "Holy Cascade": "jb2a.liquid.splash.blue",

            // Schutz & Heilung
            "Haste": "jb2a.magic_signs.circle.02.transmutation.intro.yellow",
            "Slow": "jb2a.magic_signs.circle.02.transmutation.intro.blue",
            "Heroism": "jb2a.magic_signs.circle.02.divination.intro.yellow",
            "Warding Seal": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",

            // Kontrolle & Nutzen
            "Blindness": "jb2a.magic_signs.circle.01.necromancy.intro.purple",
            "Fear": "jb2a.shatter.01.purple", // Massenfurcht-Vibe
            "Hypnotic Pattern": "jb2a.color_spray.01.rainbow",
            "Wall of Thorns": "jb2a.entangle.01.green"
        },
        level4: {
            // Offensiv & Schaden
            "Phantasmal Killer": "jb2a.phantasmal_killer.01.purple",
            "Phantasmal Calamity": "jb2a.phantasmal_killer.01.purple",
            "Searing Light": "jb2a.ray.01.white",
            "Holy Light": "jb2a.ray.01.white",
            "Confusion": "jb2a.magic_signs.circle.02.enchantment.intro.yellow",

            // Schutz & Heilung
            "Stoneskin": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",
            "Mountain Resilience": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",
            "Vital Beacon": "jb2a.healing_generic.burst.yellow",
            "Freedom of Movement": "jb2a.magic_signs.circle.01.abjuration.intro.blue",
            "Unfettered Movement": "jb2a.magic_signs.circle.01.abjuration.intro.blue",

            // Kontrolle & Nutzen
            "Dimension Door": "jb2a.misty_step.01.blue",
            "Translocate": "jb2a.misty_step.01.blue",
            "Fly": "jb2a.wind_directional.white",
            "Resilient Sphere": "jb2a.magic_signs.circle.01.abjuration.intro.blue"
        }
    },

    persistent: {
        fire: "jb2a.fire_bolt.orange", acid: "jb2a.liquid.splash.green", bleed: "jb2a.impact.01.red",
        electricity: "jb2a.lightning_bolt.01.blue", poison: "jb2a.fumes.steam.white"
    },

    conditions: {
        "Frightened": "jb2a.magic_signs.circle.02.necromancy.intro.dark_purple",
        "Sickened": "jb2a.magic_signs.circle.02.conjuration.intro.green",
        "Prone": "jb2a.impact.01.white", "Unconscious": "jb2a.sleep.01.blue",
        "Dying": "jb2a.curse.01.dark_purple", "Hunt Prey": "jb2a.magic_signs.circle.02.divination.intro.green",
        "Rage": "jb2a.magic_signs.circle.02.enchantment.intro.red", buff_pulse: "jb2a.magic_signs.circle.02.abjuration.intro.blue"
    }
};

// --- LOGIK-ENGINE ---
Hooks.once('ready', () => {
    console.log("PF2e Animation Framework | 1.4.1: Master Grimoire lückenlos.");
    Sequencer.Preloader.preload([ANIMATIONS.melee.slashing, ANIMATIONS.spells.level1.Heal, ANIMATIONS.conditions.buff_pulse]);
});

const SELF_EFFECTS = ["Shield", "Raise Shield", "Bless", "Bane", "Rage", "Hunt Prey", "Wild Shape", "Untamed Form", "Mage Armor", "Mirror Image", "Barkskin", "Invisibility", "Haste", "Heroism", "Stoneskin", "Fly", "Dimension Door", "Translocate"];
const PROJECTILES = ["Magic Missile", "Force Barrage", "Sudden Bolt", "Fireball", "Lightning Bolt", "Searing Light", "Firearm Strike", "Needle Darts", "Produce Flame", "Shocking Grasp"];

Hooks.on("createChatMessage", async (message, options, userId) => {
    if (game.user.id !== userId) return;

    const item = message.item || (message.flags.pf2e?.origin?.uuid ? await fromUuid(message.flags.pf2e.origin.uuid) : null);
    if (!item) return;

    const sourceToken = canvas.tokens.get(message.speaker.token) || canvas.tokens.placeables.find(t => t.actor?.id === message.speaker.actor);
    const targets = Array.from(game.user.targets);
    if (!sourceToken) return;

    const itemName = item.name;
    const itemSlug = item.slug || "";
    const flavor = (message.flavor || "").toLowerCase();
    const isCrit = flavor.includes("critical success") || flavor.includes("kritischer erfolg");

    const findInMap = (key) => {
        if (!key) return null;
        for (let cat in ANIMATIONS.classes) if (ANIMATIONS.classes[cat][key]) return ANIMATIONS.classes[cat][key];
        for (let lvl in ANIMATIONS.spells) if (ANIMATIONS.spells[lvl][key]) return ANIMATIONS.spells[lvl][key];
        return ANIMATIONS.melee[key];
    };

    let animKey = findInMap(itemName) || findInMap(itemSlug);

    if (flavor.includes("sneak attack") || flavor.includes("strategic strike")) {
        if (targets.length > 0) new Sequence().effect().file(ANIMATIONS.melee["Sneak Attack"]).atLocation(targets[0]).scaleToObject(1.1).delay(250).play();
    }

    if (!animKey) {
        let typeKey = item.system?.damage?.damageType || item.system?.damage?.array?.[0]?.type;
        if (!typeKey && (flavor.includes("slashing") || flavor.includes("axt"))) typeKey = "slashing";
        animKey = ANIMATIONS.melee[typeKey];
        if (["slashing", "piercing", "bludgeoning"].includes(typeKey)) {
            const is2H = item.system?.usage?.value?.includes("two-hands") || item.system?.traits?.value?.includes("two-hand");
            animKey += is2H ? ".two_handed" : ".one_handed";
        }
    }

    if (!animKey) return;

    let seq = new Sequence();
    if (isCrit && !SELF_EFFECTS.some(se => itemName.includes(se))) seq.canvasPan().shake({ duration: 500, intensity: 8 });

    const isSelf = SELF_EFFECTS.some(se => itemName.includes(se) || itemSlug.includes(se)) || (targets.length === 0 && item.type === "spell");
    const finalTargets = isSelf ? [sourceToken] : targets;

    finalTargets.forEach(t => {
        let effect = seq.effect().file(animKey).atLocation(t);
        if (itemName.includes("Wild Shape") || itemSlug.includes("untamed-form")) effect.scaleToObject(2.0).playbackRate(0.8);
        else if (PROJECTILES.some(p => itemName.includes(p)) || animKey.includes("bullet")) effect.atLocation(sourceToken).stretchTo(t).playbackRate(1.2);
        else if (isSelf) effect.scaleToObject(1.5).fadeIn(400).fadeOut(400);
        else effect.rotateTowards(sourceToken).scaleToObject(isCrit ? 1.9 : 1.4).playbackRate(1.1);

        if (["Flurry of Blows", "Twin Takedown", "Hunted Shot"].includes(itemName)) effect.repeats(2, 250);
    });
    seq.play();
});

Hooks.on("combatTurn", async (combat, updateData, updateOptions) => {
    const currentToken = canvas.tokens.get(combat.combatant.tokenId);
    const actor = currentToken?.actor;
    if (!actor) return;
    let seq = new Sequence();
    const pTypes = ["fire", "acid", "bleed", "electricity", "poison"];
    for (let type of pTypes) {
        if (actor.items.some(i => i.slug?.includes(`persistent-${type}`))) {
            seq.effect().file(ANIMATIONS.persistent[type]).atLocation(currentToken).scaleToObject(1.2).duration(2000).play();
        }
    }
    const effects = [...actor.itemTypes.condition.map(c => c.name), ...actor.itemTypes.effect.map(e => e.name)];
    effects.forEach((eff, i) => {
        const anim = ANIMATIONS.conditions[eff] || findInMap(eff);
        if (anim) seq.effect().file(anim).atLocation(currentToken).scaleToObject(1.3).duration(3000).delay(i * 500).opacity(0.5).play();
    });
});