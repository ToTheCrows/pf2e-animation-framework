export const SELF_EFFECTS = ["shield", "raise-a-shield", "rage", "hunt-prey", "wild-shape", "haste", "blur", "invisibility", "mirror-image", "fleet-step", "mystic-armor", "enlarge", "disguise", "resist-energy", "fire-shield", "freedom-of-movement", "air-walk", "guidance", "heroism", "arcane-cascade", "ancestral-memories", "allegro", "uplifting-overture", "stunning-fist", "mountain-stance", "crane-stance"];

export const PROJECTILES = ["force-barrage", "magic-missile", "kraftgeschoss", "admonishing-ray", "briny-bolt", "hydraulic-push", "snowball", "thunderstrike", "blazing-bolt", "sudden-bolt", "fireball", "lightning-bolt", "acid-arrow", "chakram", "enervation", "longbow", "shortbow", "crossbow", "bolt", "pistol", "musket", "arquebus", "bullet", "ray-of-enfeeblement", "hand-of-the-apprentice"];

export const BURSTS = ["heal", "healing", "shatter", "acidic-burst", "breathe-fire", "grim-tendrils", "pummeling-rubble", "acid-grip", "animated-assault", "boneshaker", "ignite-fireworks", "mist", "noise-blast", "vomit-swarm", "web", "crashing-wave", "hypnotize", "rouse-skeletons", "agonizing-despair", "vampiric-feast", "gravity-well", "stinking-cloud", "fear", "sleep", "confusion", "vital-beacon", "phantasmal-killer", "vampiric-maiden", "holy-blast", "inspire-courage", "inspire-defense", "dirge-of-doom", "hymn-of-healing", "song-of-strength", "ki-blast"];

export const PERSISTENT_TAGS = ["bless", "bane", "aura", "frightened", "fleeing", "wounded", "dying", "dazzled", "blinded", "grabbed", "restrained", "slowed", "stunned", "paralyzed", "unconscious", "heroism", "clumsy", "doomed", "drained", "fatigued", "sickened", "invisible", "hidden", "off-guard", "inspire-courage", "inspire-defense", "song-of-marching", "dirge-of-doom", "hymn-of-healing", "uplifting-overture", "song-of-strength", "mountain-stance", "crane-stance"];

export const CONDITION_CHAINS = [
    ["frightened", "fleeing"],
    ["wounded", "dying"],
    ["dazzled", "blinded"],
    ["grabbed", "restrained"],
    ["slowed", "stunned", "paralyzed", "unconscious"]
];

export const DAMAGE_IMPACTS = {
    "slashing": { file: "jb2a.liquid.splash.red", scale: 1.5 },
    "piercing": { file: "jb2a.liquid.splash.red", scale: 1.2 },
    "bludgeoning": { file: "jb2a.impact.ground_crack.blue.03", scale: 2.5, below: true },
    "fire": { file: "jb2a.shield_themed.below.fire.02.orange", scale: 1.8, below: true },
    "cold": { file: "jb2a.impact_themed.ice_shard.blue", scale: 2.0 },
    "electricity": { file: "jb2a.token_border.circle.static.blue.003", scale: 2.0 },
    "acid": { file: "jb2a.liquid.splash.green", scale: 1.5 },
    "sonic": { file: "jb2a.thunderwave.center.blue", scale: 1.5 },
    "force": { file: "jb2a.impact.ground_crack.blue.01", scale: 3.0, below: true },
    "mental": { file: "jb2a.magic_signs.rune.enchantment.intro.purple", scale: 1.2 },
    "poison": { file: "jb2a.icon.poison.dark_green", scale: 1.5 },
    "positive": { file: "jb2a.healing_generic.400px.yellow", scale: 1.5 },
    "negative": { file: "jb2a.healing_generic.200px.purple", scale: 1.5 },
    "healing": { file: "jb2a.healing_generic.400px.green", scale: 1.5 },
    "default": { file: "jb2a.liquid.splash.red", scale: 1.2 }
};