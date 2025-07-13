import { quintIn, quintOut, quintInOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export function crtShutdown(
    _: Element,
    { delay = 0, duration = 550 } = {},
): TransitionConfig {
    return {
        delay,
        duration,
        easing: quintOut,
        css: (t: number) => {
            // Invert t since this is outro (t:0->1 intro, want progress 1->0)
            const progress = 1 - t;

            // Vertical jitter for old CRT wobble effect
            const jitter = 2 * Math.sin(progress * 50);

            let scaleX: number, scaleY: number;
            let brightness: number, contrast: number, saturate: number;
            let glowOpacity: number;
            let opacity = 1;

            if (progress <= 0.6) {
                // First 60% of the animation
                const localT = progress / 0.6;

                // Eased scaling
                scaleX = 1 + 0.3 * quintInOut(localT);
                scaleY = 1.3 - 1.299 * quintInOut(localT);

                // Filters for bright white flash glow
                brightness = 1 + 9 * localT;
                contrast = 1 + 10 * localT;
                saturate = 1 + 30 * localT;

                // Pulsing glow opacity (2 full pulses)
                glowOpacity = 0.8 * Math.sin(progress * Math.PI * 4) ** 2;
            } else {
                // Last 40% of animation with easing
                const localT = (progress - 0.6) / 0.4;
                const easedT = quintIn(localT);

                scaleX = 1.3 - 1.3 * easedT;
                scaleY = 0.001 - 0.0009 * easedT;

                brightness = 10 + 40 * easedT;
                contrast = 11 + 39 * easedT;
                saturate = 31 + 69 * easedT;

                glowOpacity = 0.8 * Math.sin(progress * Math.PI * 4) ** 2;
            }

            // Flickering opacity in last 10% of shutdown, smoothed out to avoid flicker at very end
            if (progress < 0.1) {
                opacity = 0.7 + 0.3 * Math.random();
            }

            // Chromatic aberration effect with subtle colored drop shadows, softer with blur
            const chroma = `
                drop-shadow(1.5px 0 rgba(255, 0, 0, 0.5))
                drop-shadow(-1.5px 0 rgba(0, 255, 255, 0.5))
                drop-shadow(0 1.5px rgba(0, 0, 255, 0.3))
            `;

            // Soften the white glow box-shadow: less spread, more blur, less opacity
            const softGlow = `inset 0 0 50px 30px rgba(255,255,255,${glowOpacity.toFixed(2)})`;

            return `
                transform: scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)}) translate3d(0, ${jitter.toFixed(2)}px, 0);
                filter: brightness(${brightness.toFixed(2)}) contrast(${contrast.toFixed(2)}) saturate(${saturate.toFixed(2)}) ${chroma};
                box-shadow: ${softGlow};
                opacity: ${opacity.toFixed(2)};
            `;
        },
    };
}
