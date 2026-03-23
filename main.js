/**
 * PF2e Animation Framework
 * Version 1.9.3 - "The Watcher's Pulse"
 * Master Grimoire: Turn-Based Opacity, Unified Persistence, Auto-Cleanup.
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
        "frightened": "jb2a.condition.curse.01.006.purple",
        "prone": "jb2a.condition.curse.01.013.red",
        "stunned": "jb2a.markers.stun.purple.02",
        "blinded": "jb2a.markers.blind.black.01",
        "confused": "jb2a.markers.confusion.purple.01",
        "immobilized": "jb2a.markers.chain.standard.white.01",
        "paralyzed": "jb2a.markers.lightning.blue.01",
        "quickened": "jb2a.condition.boon.01.015.yellow",
        "sickened": "jb2a.condition.curse.01.007.green"
    }
};

let ANIM_INDEX = {};
const SELF_EFFECTS = ["shield", "raise-a-shield", "rage", "hunt-prey", "wild-shape", "haste", "blur", "invisibility", "mirror-image", "fleet-step", "mystic-armor", "enlarge", "disguise", "resist-energy", "fire-shield", "freedom-of-movement", "air-walk", "guidance", "heroism"];
const PROJECTILES = ["force-barrage", "magic-missile", "kraftgeschoss", "admonishing-ray", "briny-bolt", "hydraulic-push", "snowball", "thunderstrike", "blazing-bolt", "sudden-bolt", "fireball", "lightning-bolt", "acid-arrow", "chakram", "enervation", "longbow", "shortbow", "crossbow", "bolt", "pistol", "musket", "arquebus", "bullet", "ray-of-enfeeblement"];
const BURSTS = ["heal", "healing", "shatter", "acidic-burst", "breathe-fire", "grim-tendrils", "pummeling-rubble", "acid-grip", "animated-assault", "boneshaker", "ignite-fireworks", "mist", "noise-blast", "vomit-swarm", "web", "crashing-wave", "hypnotize", "rouse-skeletons", "agonizing-despair", "vampiric-feast", "gravity-well", "stinking-cloud", "fear", "sleep", "confusion", "vital-beacon", "phantasmal-killer", "vampiric-maiden"];
const PERSISTENT_TAGS = ["bless", "bane", "aura", "frightened", "prone", "stunned", "blinded", "confused", "immobilized", "paralyzed", "quickened", "sickened", "heroism"];

Hooks.once('ready', () => {
    Object.values(ANIMATIONS).forEach(category => {
        Object.entries(category).forEach(([key, value]) => {
            if (typeof value === 'string') ANIM_INDEX[key] = value;
            else Object.entries(value).forEach(([subKey, subVal]) => { ANIM_INDEX[subKey] = subVal; });
        });
    });
    console.log(`PF2e Animation Framework | v1.9.3: ${Object.keys(ANIM_INDEX).length} Slugs im Index. Resonanz stabilisiert.`);
});

/**
 * Turn-Manager: Regelt die Sichtbarkeit von persistenten Effekten
 */
Hooks.on("updateCombat", (combat) => {
    const currentTokenId = combat.combatant?.tokenId;
    if (!currentTokenId) return;

    Sequencer.EffectManager.getEffects({ origin: "PF2e-Anim-Framework" }).forEach(effect => {
        const isCurrentTurn = effect.data.name.includes(currentTokenId);
        effect.update({
            alpha: isCurrentTurn ? 1.0 : 0.3
        });
    });
});

/**
 * Automatisches Entfernen beim Löschen von Items/Effekten
 */
Hooks.on("deleteItem", (item) => {
    const token = item.parent?.getActiveTokens()[0];
    if (token) Sequencer.EffectManager.endEffects({ name: `Persist-${token.id}-${item.slug}` });
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
    const isPersistent = PERSISTENT_TAGS.some(tag => itemSlug.includes(tag));

    const finalTargets = isSelf ? [sourceToken] : Array.from(game.user.targets);

    let seq = new Sequence();

    if (isPersistent) {
        const radius = item.system.area?.value || 5;
        const scale = (radius * 4) / 5;
        const isCurrent = game.combat?.combatant?.tokenId === sourceToken.id;

        seq.effect()
            .file(animKey)
            .attachTo(sourceToken)
            .scaleToObject(scale)
            .persist()
            .origin("PF2e-Anim-Framework")
            .name(`Persist-${sourceToken.id}-${itemSlug}`)
            .fadeIn(1000)
            .opacity(isCurrent ? 1.0 : 0.3)
            .loopProperty("sprite", "alpha", { from: 0.1, to: 0.4, duration: 3000, pingpong: true });
    } else {
        finalTargets.forEach(t => {
            let effect = seq.effect().file(animKey);
            if (isSelf || isBurst) {
                effect.atLocation(t).scaleToObject(1.5).fadeIn(400).fadeOut(400);
            } else {
                effect.atLocation(sourceToken).stretchTo(t).playbackRate(1.2);
                if (isCrit) effect.scale(1.5);
            }
        });
    }
    seq.play();
});