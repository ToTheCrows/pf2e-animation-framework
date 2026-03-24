export const COMPLEX_ANIMATIONS = {
    "bomb-logic": (seq, token, target, data, radius = 5) => {
        const explosionSize = (radius > 0 ? radius * 2.5 : 3.5);
        seq.effect()
            .file(data.proj)
            .atLocation(token)
            .stretchTo(target)
            .waitUntilFinished(-200);
        seq.effect()
            .file(data.exp)
            .atLocation(target)
            .size(explosionSize, { gridUnits: true })
            .zIndex(1);
        if (data.isSticky) {
            seq.effect()
                .file(data.exp)
                .atLocation(target)
                .belowTokens()
                .size(explosionSize * 0.8, { gridUnits: true })
                .fadeIn(1000).fadeOut(2000).duration(10000);
        }
        if (data.isHorror) {
            seq.effect()
                .file("jb2a.icon.horror.purple")
                .atLocation(target, { randomOffset: 1 })
                .repeats(3, 500)
                .scale(0.3)
                .animateProperty("sprite", "position.y", { from: 0, to: -100, duration: 2000 })
                .fadeOut(1000);
        }
    },
    "rage": (seq, token) => {
        seq.effect()
            .file("jb2a.extras.tmfx.outpulse.circle.02.normal")
            .atLocation(token)
            .size(4, { gridUnits: true }).opacity(0.25);
        seq.effect()
            .file("jb2a.impact.ground_crack.orange.01")
            .atLocation(token).belowTokens().size(3.5, { gridUnits: true }).fadeOut(10000);
        seq.effect()
            .file("jb2a.wind_stream.white")
            .attachTo(token).scaleToObject(1.2).rotate(90).tint("#FF0000").persist()
            .origin("PF2e-Anim-Framework").name(`Persist-${token.id}-rage`);
    }
};