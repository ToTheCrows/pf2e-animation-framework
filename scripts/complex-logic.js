export const COMPLEX_ANIMATIONS = {
    "bomb-logic": (seq, token, target, data, radius = 5) => {
        const explosionSize = (radius > 0 ? radius * 2.5 : 3.5);
        seq.effect().file(data.proj).atLocation(token).stretchTo(target).waitUntilFinished(-200);
        seq.effect().file(data.exp).atLocation(target).size(explosionSize, { gridUnits: true }).zIndex(1);
    },
    "rage": (seq, token) => {
        seq.effect().file("jb2a.extras.tmfx.outpulse.circle.02.normal").atLocation(token).size(4, { gridUnits: true }).opacity(0.25);
        seq.effect().file("jb2a.impact.ground_crack.orange.01").atLocation(token).belowTokens().size(3.5, { gridUnits: true }).fadeOut(10000);
        seq.effect().file("jb2a.wind_stream.white").attachTo(token).scaleToObject(1.2).rotate(90).tint("#FF0000").persist().origin("PF2e-Anim-Framework").name(`Persist-${token.id}-rage`);
    }
};