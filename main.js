/**
 * PF2e Animation Framework
 * Version 2.0.7 - "The Bard"
 * Master Grimoire: Precise Aura Extraction, Canvas-Grid Scaling, V13 Visual Order.
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
        fighter: {
            "power-attack": "jb2a.impact.010.orange", "shield-bash": "jb2a.impact.007.white",
            "reactive-strike": "jb2a.melee_generic.slashing.two_handed", "knockdown": "jb2a.impact.01.yellow",
            "vicious-swing": "jb2a.impact.01.yellow", "combat-grab": "jb2a.impact.01.white"
        },
        monk: {
            "flurry-of-blows": "jb2a.unarmed_strike.physical", "ki-strike": "jb2a.impact.01.blue",
            "stunning-fist": "jb2a.magic_signs.circle.01.enchantment.intro.yellow",
            "mountain-stance": "jb2a.magic_signs.circle.01.abjuration.intro.yellow",
            "crane-stance": "jb2a.magic_signs.circle.01.divination.intro.white",
            "ki-blast": "jb2a.shatter.01.blue", "whirling-throw": "jb2a.wind_directional.white"
        },
        barbarian: {
            "rage": "jb2a.ground_cracks.02.orange", "sudden-charge": "jb2a.impact.01.yellow",
            "terrifying-howl": "jb2a.shatter.01.red", "thrash": "jb2a.melee_generic.bludgeoning.two_handed",
            "animal-rage": "jb2a.claws.01.white", "cleave": "jb2a.melee_generic.slashing.two_handed"
        },
        ranger: {
            "hunt-prey": "jb2a.magic_signs.circle.02.divination.intro.green", "gravity-weapon": "jb2a.gravity_fissure.01.purple",
            "hunted-shot": "jb2a.arrow.physical.white", "twin-takedown": "jb2a.melee_generic.slashing",
            "heal-companion": "jb2a.healing_generic.burst.green", "soothing-mist": "jb2a.fog_cloud.01.white"
        },
        rogue: {
            "debilitating-strike": "jb2a.curse.02.dark_green", "mobility": "jb2a.misty_step.01.blue",
            "surprise-attack": "jb2a.misty_step.01.blue", "quick-draw": "jb2a.melee_generic.piercing.one_handed"
        },
        cleric: {
            "raise-a-shield": "jb2a.markers.shield.blue.02", "divine-font": "jb2a.healing_generic.burst.yellowwhite",
            "emblazon-armament": "jb2a.magic_signs.circle.01.abjuration.intro.yellow", "holy-blast": "jb2a.shatter.01.yellow"
        },
        investigator: {
            "devise-a-stratagem": "jb2a.magic_signs.circle.02.divination.intro.blue",
            "known-weakness": "jb2a.magic_signs.circle.01.divination.intro.white",
            "suspect-of-opportunity": "jb2a.magic_signs.circle.01.divination.intro.blue",
            "clues": "jb2a.magic_signs.circle.01.divination.intro.yellow"
        },
        gunslinger: {
            "firearm-strike": "jb2a.bullet.01.orange", "reload": "jb2a.fumes.steam.white",
            "slingers-reload": "jb2a.fumes.steam.white", "gunslingers-dodge": "jb2a.misty_step.01.blue",
            "risky-reload": "jb2a.fumes.steam.white", "ten-paces": "jb2a.impact.01.orange"
        },
        druid: {
            "wild-shape": "jb2a.magic_signs.circle.01.transmutation.intro.green", "untamed-form": "jb2a.magic_signs.circle.01.transmutation.intro.green",
            "goodberry": "jb2a.healing_generic.200px.green"
        },
        mage: {
            "arcane-cascade": "jb2a.magic_signs.circle.02.abjuration.intro.blue", "counterspell": "jb2a.magic_signs.circle.01.abjuration.intro.red",
            "drain-bond": "jb2a.magic_signs.circle.01.divination.intro.blue", "hand-of-the-apprentice": "jb2a.spiritual_weapon.sword.blue"
        },
        sorcerer: {
            "dangerous-sorcery": "jb2a.impact.01.orange", "sorcerous-potency": "jb2a.magic_signs.circle.02.evocation.intro.red",
            "ancestral-memories": "jb2a.magic_signs.circle.01.divination.intro.purple", "bloodline-focus": "jb2a.magic_signs.circle.01.necromancy.intro.red"
        },
        bard: {
            "aura-inspire-courage": "jb2a.bardic_inspiration.dark_red", "spell-effect-aura-inspire-defense": "jb2a.bardic_inspiration.purplepink",
            "song-of-marching": "jb2a.template_circle.aura.03.outward.004.complete.part02.pinkyellow", "dirge-of-doom": "jb2a.aura_themed.01.inward.loop.wood.01.purple",
            "hymn-of-healing": "jb2a.aura_themed.01.outward.complete.cold.01.green", "uplifting-overture": "jb2a.aura_themed.01.inward.loop.nature.01.green",
            "allegro": "jb2a.bardic_inspiration.blueyellow", "spell-effect-aura-song-of-strength": "jb2a.bardic_inspiration.greenorange"
        }
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
            "guidance": "jb2a.condition.boon.01.005.yellow", "bless": "jb2a.bless.200px.intro.yellow", "bane": "jb2a.bless.200px.intro.purple",
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

const FRAMEWORK_REGISTRY = new Map();
let ANIM_INDEX = {};

const SELF_EFFECTS = ["shield", "raise-a-shield", "rage", "hunt-prey", "wild-shape", "haste", "blur", "invisibility", "mirror-image", "fleet-step", "mystic-armor", "enlarge", "disguise", "resist-energy", "fire-shield", "freedom-of-movement", "air-walk", "guidance", "heroism", "arcane-cascade", "ancestral-memories"];
const PROJECTILES = ["force-barrage", "magic-missile", "kraftgeschoss", "admonishing-ray", "briny-bolt", "hydraulic-push", "snowball", "thunderstrike", "blazing-bolt", "sudden-bolt", "fireball", "lightning-bolt", "acid-arrow", "chakram", "enervation", "longbow", "shortbow", "crossbow", "bolt", "pistol", "musket", "arquebus", "bullet", "ray-of-enfeeblement", "hand-of-the-apprentice"];
const BURSTS = ["heal", "healing", "shatter", "acidic-burst", "breathe-fire", "grim-tendrils", "pummeling-rubble", "acid-grip", "animated-assault", "boneshaker", "ignite-fireworks", "mist", "noise-blast", "vomit-swarm", "web", "crashing-wave", "hypnotize", "rouse-skeletons", "agonizing-despair", "vampiric-feast", "gravity-well", "stinking-cloud", "fear", "sleep", "confusion", "vital-beacon", "phantasmal-killer", "vampiric-maiden", "holy-blast"];
const PERSISTENT_TAGS = ["bless", "bane", "aura", "frightened", "prone", "stunned", "blinded", "confused", "immobilized", "paralyzed", "quickened", "sickened", "heroism", "clumsy", "doomed", "drained", "dying", "enfeebled", "fleeing", "grabbed", "restrained", "slowed", "stupefied", "unconscious", "invisible", "hidden", "off-guard", "flat-foot"];

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => { ANIM_INDEX[subKey] = subVal; });
        });
    });
    console.log(`PF2e Animation Framework | v2.0.6: Radiant Boundary aktiv.`);
});

function playPersistentAnimation(token, animKey, itemSlug, radiusValue = 0, isAura = false) {
    Sequencer.EffectManager.endEffects({ name: `Persist-${token.id}-${itemSlug}` });

    const gridDist = canvas.scene.grid.distance || 5;
    const safeRadius = Number(radiusValue) || 0;
    const tokenWidthFt = token.document.width * gridDist;

    // Berechnung des Scale-Faktors relativ zur Token-Größe
    const auraScale = isAura ? ((safeRadius * 2) + tokenWidthFt) / tokenWidthFt : 1.2;

    const stackCount = FRAMEWORK_REGISTRY.get(token.id)?.size || 0;
    const verticalOffset = isAura ? 0 : (stackCount * -25);

    if (!FRAMEWORK_REGISTRY.has(token.id)) FRAMEWORK_REGISTRY.set(token.id, new Set());
    FRAMEWORK_REGISTRY.get(token.id).add(itemSlug);

    const isCurrent = game.combat?.combatant?.tokenId === token.id;

    new Sequence()
        .effect()
        .file(animKey)
        .attachTo(token)
        .scaleToObject(auraScale)
        .spriteOffset({ y: verticalOffset })
        .persist()
        .origin("PF2e-Anim-Framework")
        .name(`Persist-${token.id}-${itemSlug}`)
        .fadeIn(1000)
        .opacity(isCurrent ? 1.0 : 0.4)
        .loopProperty("sprite", "alpha", { from: 0.2, to: 0.5, duration: 3000, pingpong: true })
        .play();
}

Hooks.on("createItem", (item, options, userId) => {
    if (game.user.id !== userId) return;
    const token = item.parent?.getActiveTokens()[0];
    if (!token) return;

    const itemSlug = item.slug || "";
    const animKey = findInIndex(itemSlug);
    if (!animKey || !PERSISTENT_TAGS.some(tag => itemSlug.includes(tag))) return;

    // Tiefe Extraktion des Radius aus Rule Elements oder Area-Daten
    let radius = item.system.rules?.find(r => r.key === "Aura")?.radius
        || item.system.area?.value
        || item.flags.pf2e?.rulesArea?.radius
        || 0;

    const isAura = radius > 0 || item.system.traits?.value?.includes("aura") || item.name.toLowerCase().includes("aura");

    // Fallback: Wenn es eine Aura ist, aber kein Radius gefunden wurde (z.B. 5ft Standard)
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

Hooks.on("renderChatMessageHTML", (message, html) => {
    // UI-Elemente Platzhalter
});

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

    if (PERSISTENT_TAGS.some(tag => itemSlug.includes(tag))) return;

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