/**
 * PF2e Animation Framework
 * Version 1.5.3 - "The True Strike"
 * Master Grimoire: Fixed Over-Aggressive Filter, Regex Word Boundaries, Grand Index.
 */

const ANIMATIONS = {
    melee: {
        slashing: "jb2a.melee_generic.slashing",
        piercing: "jb2a.melee_generic.piercing",
        bludgeoning: "jb2a.melee_generic.bludgeoning",
        "Sneak Attack": "jb2a.impact.011.yellow",
        "Strategic Strike": "jb2a.magic_signs.circle.01.conjuration"
    },
    classes: {
        fighter: { "Power Attack": "jb2a.impact.010.orange", "Shield Bash": "jb2a.impact.007.white", "Reactive Strike": "jb2a.melee_generic.slashing.two_handed", "Knockdown": "jb2a.impact.002.yellow", "Vicious Swing": "jb2a.melee_generic.slash.02.001.orange.0", "Combat Grab": "jb2a.impact.008.orange" },
        monk: { "Flurry of Blows": "jb2a.melee_generic.creature_attack.fist.001.yellow.0", "Ki Strike": "jb2a.impact.001.blue", "Stunning Fist": "jb2a.unarmed_strike.magical.02.blue", "Mountain Stance": "jb2a.magic_signs.circle.02.transmutation.complete.yellow", "Crane Stance": "jb2a.magic_signs.circle.02.divination.complete.dark_yellow", "Ki Blast": "jb2a.shatter.blue", "Whirling Throw": "jb2a.whirlwind.blue" },
        barbarian: { "Rage": "jb2a.ground_cracks.02.orange", "Sudden Charge": "jb2a.impact.01.yellow", "Terrifying Howl": "jb2a.shatter.red", "Thrash": "jb2a.melee_generic.bludgeoning.two_handed", "Animal Rage": "jb2a.claws.200px.bright_blue", "Cleave": "jb2a.melee_generic.slashing.two_handed" },
        ranger: { "Hunt Prey": "jb2a.magic_signs.circle.02.divination.intro.green", "Gravity Weapon": "jb2a.impact.009.purple", "Hunted Shot": "jb2a.arrow.physical.white.02", "Twin Takedown": "jb2a.melee_generic.slashing", "Heal Companion": "jb2a.healing_generic.burst.greenorange", "Soothing Mist": "jb2a.healing_generic.03.burst.bluegreen", "Crossbow Ace": "jb2a.bolt.physical.orange", "Animal Feature": "jb2a.claws.200px.bright_yellow" },
        rogue: { "Debilitating Strike": "jb2a.markers.skull.dark_green.01", "Mobility": "jb2a.misty_step.01.blue", "Surprise Attack": "jb2a.misty_step.01.green", "Quick Draw": "jb2a.melee_generic.slash.02.002.blue.1" },
        cleric: { "Raise Shield": "jb2a.markers.shield.blue.02", "Emblazon Armament": "jb2a.magic_signs.circle.02.abjuration.intro.yellow", "Sanctify Weapon": "jb2a.spiritual_weapon.sword.flaming.yellow", "Divine Font": "jb2a.healing_generic.burst.yellowwhite", "Holy Blast": "jb2a.shatter.01.yellow" },
        investigator: { "Devise a Stratagem": "jb2a.magic_signs.circle.02.divination.intro.dark_blue", "Known Weakness": "jb2a.magic_signs.circle.02.divination.outro.dark_yellow", "Suspect of Opportunity": "jb2a.magic_signs.circle.02.divination.complete.dark_green", "Clues": "jb2a.magic_signs.circle.02.enchantment.complete.dark_pink" },
        gunslinger: { "Firearm Strike": "jb2a.bullet.01.orange", "Reload": "jb2a.fumes.steam.white", "Slinger's Reload": "jb2a.fumes.steam.white", "Gunslinger's Dodge": "jb2a.misty_step.01.blue", "Risky Reload": "jb2a.fumes.steam.white", "Ten Paces": "jb2a.impact.004.orange" },
        druid: { "Wild Shape": "jb2a.magic_signs.circle.02.transmutation.intro.green", "Untamed Form": "jb2a.magic_signs.circle.02.transmutation.intro.green", "Goodberry": "jb2a.healing_generic.200px.green", "Animal Vision": "jb2a.magic_signs.circle.02.divination.intro.green" },
        mage: { "Arcane Cascade": "jb2a.antilife_shell.blue_with_circle", "Counterspell": "jb2a.magic_signs.circle.02.abjuration.complete.red", "Drain Bond": "jb2a.magic_signs.circle.02.transmutation.outro.blue", "Drain Bond Item": "jb2a.magic_signs.circle.02.transmutation.outro.blue", "Hand of the Apprentice": "jb2a.arcane_hand.rainbow", "Call Staff": "jb2a.spiritual_weapon.quarterstaff.01.astral.01.blue" },
        sorcerer: { "Dangerous Sorcery": "jb2a.whirlwind.red", "Sorcerous Potency": "jb2a.magic_signs.circle.02.evocation.intro.red", "Ancestral Memories": "jb2a.magic_signs.circle.02.divination.loop.purple", "Bloodline Focus": "jb2a.magic_signs.circle.02.necromancy.intro.red" }
    },
    spells: {
        level1: { "Magic Missile": "jb2a.magic_missile.purple", "Force Barrage": "jb2a.magic_missile.purple", "Breathe Fire": "jb2a.burning_hands.01.red", "Burning Hands": "jb2a.burning_hands.01.orange", "Heal": "jb2a.healing_generic.burst.bluewhite", "Harm": "jb2a.cast_generic.01.dark_purple.0", "Shield": "jb2a.markers.shield.blue.02", "Bless": "jb2a.magic_signs.circle.02.divination.intro.yellow", "Bane": "jb2a.magic_signs.circle.02.necromancy.intro.red", "Shocking Grasp": "jb2a.shocking_grasp.01.blue", "Thunderstrike": "jb2a.lightning_bolt.01.blue", "Gouging Claw": "jb2a.claws.01.white", "Needle Darts": "jb2a.magic_missile.01.white", "Telekinetic Projectile": "jb2a.magic_missile.01.blue", "Mage Armor": "jb2a.magic_signs.circle.01.abjuration.intro.blue", "Color Spray": "jb2a.color_spray.01.rainbow" },
        level2: { "Sudden Bolt": "jb2a.lightning_bolt.01.blue", "Acid Grip": "jb2a.liquid.splash.green", "Flaming Sphere": "jb2a.flaming_sphere.01.orange", "Shatter": "jb2a.shatter.01.yellow", "Restoration": "jb2a.healing_generic.burst.yellow", "Barkskin": "jb2a.magic_signs.circle.01.transmutation.intro.green", "Mirror Image": "jb2a.mirror_image.01.blue", "Invisibility": "jb2a.misty_step.01.blue" },
        level3: { "Fireball": "jb2a.fireball.01.orange", "Lightning Bolt": "jb2a.lightning_bolt.01.blue", "Haste": "jb2a.magic_signs.circle.02.transmutation.intro.yellow", "Slow": "jb2a.magic_signs.circle.02.transmutation.intro.blue", "Heroism": "jb2a.magic_signs.circle.02.divination.intro.yellow", "Vampiric Touch": "jb2a.vampiric_touch.01.purple" },
        level4: { "Dimension Door": "jb2a.misty_step.01.blue", "Translocate": "jb2a.misty_step.01.blue", "Phantasmal Killer": "jb2a.phantasmal_killer.01.purple", "Stoneskin": "jb2a.magic_signs.circle.01.abjuration.intro.yellow", "Searing Light": "jb2a.ray.01.white", "Fly": "jb2a.wind_directional.white" }
    },
    persistent: { fire: "jb2a.fire_bolt.orange", acid: "jb2a.liquid.splash.green", bleed: "jb2a.impact.01.red", electricity: "jb2a.lightning_bolt.01.blue", poison: "jb2a.fumes.steam.white" },
    conditions: { "Frightened": "jb2a.magic_signs.circle.02.necromancy.intro.dark_purple", "Sickened": "jb2a.magic_signs.circle.02.conjuration.intro.green", "Prone": "jb2a.impact.01.white", "Unconscious": "jb2a.sleep.01.blue", "Dying": "jb2a.curse.01.dark_purple", "Hunt Prey": "jb2a.magic_signs.circle.02.divination.intro.green", "Rage": "jb2a.magic_signs.circle.02.enchantment.intro.red", buff_pulse: "jb2a.magic_signs.circle.02.abjuration.intro.blue" }
};

let ANIM_INDEX = {};

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key.toLowerCase()] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => {
                ANIM_INDEX[subKey.toLowerCase()] = subVal;
            });
        });
    });
    console.log(`PF2e Animation Framework | v1.5.2: True Strike Ready.`);
});

const SELF_EFFECTS = ["Shield", "Raise Shield", "Bless", "Bane", "Rage", "Hunt Prey", "Wild Shape", "Untamed Form", "Mage Armor", "Mirror Image", "Barkskin", "Invisibility", "Haste", "Heroism", "Stoneskin", "Fly", "Dimension Door", "Translocate", "Drain Bond", "Arcane Cascade", "Ancestral Memories"];
const PROJECTILES = ["Magic Missile", "Force Barrage", "Sudden Bolt", "Fireball", "Lightning Bolt", "Searing Light", "Firearm Strike", "Needle Darts", "Produce Flame", "Shocking Grasp", "Hand of the Apprentice"];

const findInIndex = (key) => {
    const s = key?.toLowerCase();
    if (!s) return null;
    if (ANIM_INDEX[s]) return ANIM_INDEX[s];
    const matches = Object.keys(ANIM_INDEX)
        .filter(k => {
            try {
                return new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(s);
            } catch (e) { return false; }
        })
        .sort((a, b) => b.length - a.length);
    return matches.length > 0 ? ANIM_INDEX[matches[0]] : null;
};

Hooks.on("createChatMessage", async (message, options, userId) => {
    if (game.user.id !== userId) return;

    // --- TRUE STRIKE FILTER (Präzise) ---
    const isDamage = message.isDamageRoll || message.flags.pf2e?.context?.type === "damage-roll";
    if (isDamage) return;

    const item = message.item || (message.flags.pf2e?.origin?.uuid ? await fromUuid(message.flags.pf2e.origin.uuid) : null);
    if (!item) return;

    const sourceToken = canvas.tokens.get(message.speaker.token) || canvas.tokens.placeables.find(t => t.actor?.id === message.speaker.actor);
    const targets = Array.from(game.user.targets);
    if (!sourceToken) return;

    const itemName = item.name;
    const itemSlug = item.slug || "";
    const flavor = (message.flavor || "").toLowerCase();
    const isCrit = flavor.includes("critical success") || flavor.includes("kritischer erfolg");

    let animKey = findInIndex(itemName) || findInIndex(itemSlug) || (itemSlug.includes("shield") ? ANIM_INDEX["shield"] : null);

    if (flavor.includes("sneak attack") || flavor.includes("strategic strike")) {
        if (targets.length > 0) new Sequence().effect().file(ANIM_INDEX["sneak attack"]).atLocation(targets[0]).scaleToObject(1.1).delay(250).play();
    }

    if (!animKey) {
        let typeKey = (item.system?.damage?.damageType || item.system?.damage?.array?.[0]?.type)?.toLowerCase();
        animKey = findInIndex(typeKey);
        if (["slashing", "piercing", "bludgeoning"].includes(typeKey)) {
            const is2H = item.system?.usage?.value?.includes("two-hands") || item.system?.traits?.value?.includes("two-hand");
            animKey += is2H ? ".two_handed" : ".one_handed";
        }
    }

    if (!animKey) return;

    let seq = new Sequence();
    if (isCrit && !SELF_EFFECTS.some(se => itemName.includes(se))) seq.canvasPan().shake({ duration: 500, intensity: 8 });

    const isSelf = SELF_EFFECTS.some(se => new RegExp(`\\b${se}\\b`, 'i').test(itemName)) || (targets.length === 0 && item.type === "spell");
    const finalTargets = isSelf ? [sourceToken] : targets;

    finalTargets.forEach(t => {
        let effect = seq.effect().file(animKey).atLocation(t);
        if (itemName.includes("Wild Shape") || itemSlug.includes("untamed-form")) effect.scaleToObject(2.0).playbackRate(0.8);
        else if (PROJECTILES.some(p => new RegExp(`\\b${p}\\b`, 'i').test(itemName)) || animKey.includes("bullet")) effect.atLocation(sourceToken).stretchTo(t).playbackRate(1.2);
        else if (isSelf) effect.scaleToObject(1.5).fadeIn(400).fadeOut(400);
        else effect.rotateTowards(sourceToken).scaleToObject(isCrit ? 2.2 : 1.6).playbackRate(1.1);
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
            seq.effect().file(ANIM_INDEX[type]).atLocation(currentToken).scaleToObject(1.2).duration(2000).play();
        }
    }
    const effects = [...actor.itemTypes.condition.map(c => c.name), ...actor.itemTypes.effect.map(e => e.name)];
    effects.forEach((eff, i) => {
        const anim = findInIndex(eff);
        if (anim) seq.effect().file(anim).atLocation(currentToken).scaleToObject(1.3).duration(3000).delay(i * 500).opacity(0.5).play();
    });
});