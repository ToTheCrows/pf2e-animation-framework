/**
 * PF2e Animation Framework by ToTheCrows
 * Version 1.1.0 - "The Sovereign Archive"
 * Merged Master Edition: Classes, Spells Lvl 1-2, Persistent Damage & Slug Logic.
 */

const ANIMATIONS = {
    // --- PHYSIKALISCHE GRUNDLAGEN (Weiß/Gelb) ---
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
            "Power Attack": "jb2a.impact.01.yellow",
            "Shield Bash": "jb2a.impact.01.white",
            "Reactive Strike": "jb2a.melee_generic.slashing",
            "Knockdown": "jb2a.impact.01.yellow"
        },
        monk: {
            "Flurry of Blows": "jb2a.unarmed_strike.physical",
            "Ki Strike": "jb2a.impact.01.blue",
            "Mountain Stance": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",
            "Crane Stance": "jb2a.magic_signs.circle.01.divination.intro.white",
            "Ki Blast": "jb2a.shatter.01.blue"
        },
        barbarian: {
            "Rage": "jb2a.magic_signs.circle.02.enchantment.intro.red",
            "Sudden Charge": "jb2a.impact.01.yellow",
            "Terrifying Howl": "jb2a.magic_signs.circle.02.necromancy.intro.red",
            "Cleave": "jb2a.melee_generic.slashing.two_handed"
        },
        ranger: {
            "Hunt Prey": "jb2a.magic_signs.circle.02.divination.intro.green",
            "Hunter's Edge": "jb2a.magic_signs.circle.02.transmutation.intro.green",
            "Gravity Weapon": "jb2a.gravity_fissure.01.purple",
            "Hunted Shot": "jb2a.arrow.physical.white",
            "Twin Takedown": "jb2a.melee_generic.slashing",
            "Crossbow Ace": "jb2a.bolt.physical.white"
        },
        rogue: {
            "Debilitating Strike": "jb2a.curse.02.dark_green",
            "Mobility": "jb2a.misty_step.01.blue",
            "Surprise Attack": "jb2a.misty_step.01.blue"
        },
        cleric: {
            "Raise Shield": "jb2a.markers.shield.blue.02",
            "Emblazon Armament": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",
            "Sanctify Weapon": "jb2a.spiritual_weapon.sword.yellow",
            "Divine Font": "jb2a.healing_generic.200px.blue"
        },
        investigator: {
            "Devise a Stratagem": "jb2a.magic_signs.circle.02.divination.intro.blue",
            "Known Weakness": "jb2a.magic_signs.circle.01.divination.intro.white"
        },
        gunslinger: {
            "Firearm Strike": "jb2a.bullet.01.orange",
            "Reload": "jb2a.fumes.steam.white",
            "Slinger's Reload": "jb2a.fumes.steam.white"
        },
        druid: {
            "Wild Shape": "jb2a.magic_signs.circle.01.transmutation.intro.green",
            "Untamed Form": "jb2a.magic_signs.circle.01.transmutation.intro.green",
            "Storm Order": "jb2a.lightning_bolt.01.blue",
            "Goodberry": "jb2a.healing_generic.200px.green"
        },
        mage: {
            "Drain Bond": "jb2a.magic_signs.circle.01.divination.intro.blue",
            "Arcane Cascade": "jb2a.magic_signs.circle.02.abjuration.intro.blue",
            "Counterspell": "jb2a.magic_signs.circle.01.abjuration.intro.red"
        },
        sorcerer: {
            "Dangerous Sorcery": "jb2a.impact.01.orange",
            "Sorcerous Potency": "jb2a.magic_signs.circle.02.evocation.intro.red"
        }
    },

    // --- PERSISTENT DAMAGE (V12 Logik) ---
    persistent: {
        fire: "jb2a.fire_bolt.orange",
        acid: "jb2a.liquid.splash.green",
        bleed: "jb2a.impact.01.red",
        electricity: "jb2a.lightning_bolt.01.blue",
        poison: "jb2a.fumes.steam.white"
    },

    // --- UNIVERSALMAGIE ---
    spells: {
        level1: {
            // Offensiv & Schaden
            "Magic Missile": "jb2a.magic_missile.purple",
            "Force Barrage": "jb2a.magic_missile.purple",
            "Breathe Fire": "jb2a.burning_hands.01.red",
            "Burning Hands": "jb2a.burning_hands.01.orange",
            "Shocking Grasp": "jb2a.shocking_grasp.01.blue",
            "Thunderstrike": "jb2a.lightning_bolt.01.blue",
            "Gouging Claw": "jb2a.claws.01.white",
            "Needle Darts": "jb2a.magic_missile.01.white",
            "Telekinetic Projectile": "jb2a.magic_missile.01.blue",

            // Schutz & Heilung
            "Heal": "jb2a.healing_generic.200px.blue",
            "Heal Companion": "jb2a.healing_generic.200px.green",
            "Harm": "jb2a.cast_generic.01.dark_purple.0",
            "Shield": "jb2a.markers.shield.blue.02",
            "Soothing Mist": "jb2a.healing_generic.200px.white",
            "Mage Armor": "jb2a.magic_signs.circle.01.abjuration.intro.blue",

            // Kontrolle & Nutzen
            "Bless": "jb2a.magic_signs.circle.02.divination.intro.yellow",
            "Bane": "jb2a.magic_signs.circle.02.necromancy.intro.red",
            "Guidance": "jb2a.magic_signs.circle.02.divination.intro.yellow",
            "Warp Step": "jb2a.misty_step.01.blue",
            "Color Spray": "jb2a.color_spray.01.rainbow",
            "Spiritual Weapon": "jb2a.spiritual_weapon.sword.yellow"
        },
        level2: {
            "Sudden Bolt": "jb2a.lightning_bolt.01.blue",
            "Acid Grip": "jb2a.liquid.splash.green",
            "Flaming Sphere": "jb2a.flaming_sphere.01.orange",
            "Shatter": "jb2a.shatter.01.yellow",
            "Restoration": "jb2a.healing_generic.200px.yellow",
            "Barkskin": "jb2a.magic_signs.circle.01.transmutation.intro.green",
            "Mirror Image": "jb2a.mirror_image.01.blue",
            "Invisibility": "jb2a.misty_step.01.blue",
            "Enlarge": "jb2a.magic_signs.circle.01.transmutation.intro.orange"
        }
    },

    // --- STATUS-ANZEIGEN ---
    conditions: {
        "Frightened": "jb2a.magic_signs.circle.02.necromancy.intro.dark_purple",
        "Sickened": "jb2a.magic_signs.circle.02.conjuration.intro.green",
        "Prone": "jb2a.impact.01.white",
        "Unconscious": "jb2a.sleep.01.blue",
        "Dying": "jb2a.curse.01.dark_purple",
        buff_pulse: "jb2a.magic_signs.circle.02.abjuration.intro.blue"
    }
};

// --- PRELOAD CORE (Brot & Butter) ---
Hooks.once('ready', () => {
    console.log("PF2e Animation Framework | ToTheCrows 1.1.0: Master Grimoire geladen.");
    const essentials = [
        ANIMATIONS.melee.slashing, ANIMATIONS.spells.level1.Heal,
        ANIMATIONS.classes.barbarian.Rage, ANIMATIONS.classes.ranger["Hunt Prey"]
    ];
    Sequencer.Preloader.preload(essentials);
});

const SELF_EFFECTS = ["Shield", "Raise Shield", "Bless", "Bane", "Rage", "Hunt Prey", "Wild Shape", "Untamed Form", "Goodberry", "Mirror Image", "Barkskin", "Invisibility", "Devise a Stratagem", "Reload"];
const PROJECTILES = ["Magic Missile", "Force Barrage", "Sudden Bolt", "Firearm Strike", "Needle Darts", "Ray of Enfeeblement", "Hydraulic Push", "Produce Flame"];

Hooks.on("createChatMessage", async (message, options, userId) => {
    if (game.user.id !== userId) return;
    const sourceToken = canvas.tokens.get(message.speaker.token) || canvas.tokens.placeables.find(t => t.actor?.id === message.speaker.actor);
    const targets = Array.from(game.user.targets);
    if (!sourceToken) return;

    const item = message.item;
    const itemName = item?.name || "";
    const itemSlug = item?.slug || "";
    const flavor = (message.flavor || "").toLowerCase();
    const isCrit = flavor.includes("critical success") || flavor.includes("kritischer erfolg");

    // Kaskadensuche (Name ODER Slug)
    const findAnim = (key) => {
        for (let cat in ANIMATIONS.classes) if (ANIMATIONS.classes[cat][key]) return ANIMATIONS.classes[cat][key];
        for (let lvl in ANIMATIONS.spells) if (ANIMATIONS.spells[lvl][key]) return ANIMATIONS.spells[lvl][key];
        return ANIMATIONS.melee[key];
    };

    let animKey = findAnim(itemName) || findAnim(itemSlug);

    // Spezial-Erkennung (Sneak Attack / Strategic Strike)
    if (flavor.includes("sneak attack") || flavor.includes("strategic strike")) {
        if (targets.length > 0) new Sequence().effect().file(ANIMATIONS.melee["Sneak Attack"]).atLocation(targets[0]).scaleToObject(1.1).delay(250).play();
    }

    // Melee Fallback & Händigkeit
    if (!animKey) {
        let typeKey = item?.system?.damage?.damageType || item?.system?.damage?.array?.[0]?.type;
        if (!typeKey && (flavor.includes("slashing") || flavor.includes("axt"))) typeKey = "slashing";
        animKey = ANIMATIONS.melee[typeKey];
        if (["slashing", "piercing", "bludgeoning"].includes(typeKey)) {
            const is2H = item?.system?.usage?.value?.includes("two-hands") || item?.system?.traits?.value?.includes("two-hand");
            animKey += is2H ? ".two_handed" : ".one_handed";
        }
    }

    if (!animKey) return;

    let seq = new Sequence();
    if (isCrit) seq.canvasPan().shake({ duration: 500, intensity: 8 });

    const isSelf = SELF_EFFECTS.includes(itemName) || SELF_EFFECTS.includes(itemSlug) || (targets.length === 0 && item?.type === "spell");
    const finalTargets = isSelf ? [sourceToken] : targets;

    finalTargets.forEach(t => {
        let effect = seq.effect().file(animKey).atLocation(t);

        if (itemName.includes("Wild Shape") || itemSlug.includes("untamed-form")) effect.scaleToObject(2.0).fadeIn(1000).playbackRate(0.8);
        else if (PROJECTILES.includes(itemName) || animKey.includes("bullet")) effect.atLocation(sourceToken).stretchTo(t).playbackRate(1.2);
        else if (itemName === "Heal Companion") effect.scaleToObject(1.7).filter("Glow", { color: 0x228B22 });
        else if (isSelf) effect.scaleToObject(1.5).fadeIn(400).fadeOut(400);
        else effect.rotateTowards(sourceToken).scaleToObject(isCrit ? 1.9 : 1.4).playbackRate(1.1);

        if (["Hunted Shot", "Twin Takedown", "Flurry of Blows", "Cleave"].includes(itemName)) effect.repeats(2, 250);
    });
    seq.play();
});

// --- COMBAT TURN: Persistent Damage & Conditions ---
Hooks.on("combatTurn", async (combat, updateData, updateOptions) => {
    const currentToken = canvas.tokens.get(combat.combatant.tokenId);
    if (!currentToken?.actor) return;
    const actor = currentToken.actor;

    let seq = new Sequence();
    // Persistent Damage Check
    const pDamage = ["fire", "acid", "bleed", "electricity", "poison"];
    pDamage.forEach(type => {
        if (actor.items.some(i => i.slug === `persistent-${type}`)) {
            seq.effect().file(ANIMATIONS.persistent[type]).atLocation(currentToken).scaleToObject(1.2).duration(2000).play();
        }
    });

    // Conditions Pulse
    const activeEffects = [...actor.itemTypes.condition.map(c => c.name), ...actor.appliedEffects.map(e => e.name)];
    activeEffects.forEach((eff, i) => {
        const anim = ANIMATIONS.conditions[eff] || findAnim(eff);
        if (anim) seq.effect().file(anim).atLocation(currentToken).scaleToObject(1.3).duration(3000).delay(i * 500).opacity(0.5).play();
    });
});