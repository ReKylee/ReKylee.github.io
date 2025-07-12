<script lang="ts">
    export let href: string | null = null;
    export let text: string;
    export let size:
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl" = "3xl";
    export let color: "mauve" | "pink" | "green" | "sky" | "red" = "mauve";
    export let loopDelay: number = 2000;
    // New prop to control the reveal animation order
    export let revealOrder: "random" | "linear" | "reverse" = "random";

    // --- Class Mapping for Tailwind ---
    const sizeClasses = {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
    };
    const colorClasses = {
        mauve: "text-ctp-mauve",
        pink: "text-ctp-pink",
        green: "text-ctp-green",
        sky: "text-ctp-sky",
        red: "text-ctp-red",
    };

    $: finalClasses = `font-mono font-bold ${sizeClasses[size] || sizeClasses["3xl"]} ${colorClasses[color] || colorClasses["mauve"]} cursor-pointer focus:outline-none`;

    // --- Scramble Animation Logic ---
    let displayedText = text;
    const chars = "!<>-_\\/[]{}—=+*^?#";
    let scrambleIntervalId: ReturnType<typeof setInterval> | null = null;
    let loopTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const scramble = () => {
        if (scrambleIntervalId) clearInterval(scrambleIntervalId);

        let indices = text.split("").map((_, i) => i);
        if (revealOrder === "random") {
            // Shuffle for random order
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
        } else if (revealOrder === "reverse") {
            // Reverse for right-to-left order
            indices.reverse();
        }
        // For 'linear', we just use the default sequential array.

        const revealed = new Set<number>();
        let step = 0;
        scrambleIntervalId = setInterval(() => {
            const indexToReveal = indices[step];
            if (indexToReveal !== undefined) {
                revealed.add(indexToReveal);
            }

            displayedText = text
                .split("")
                .map((_letter, index) => {
                    if (revealed.has(index)) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            step++;
            if (step >= text.length) {
                clearInterval(
                    scrambleIntervalId as ReturnType<typeof setInterval>,
                );
                displayedText = text;
                loopTimeoutId = setTimeout(scramble, loopDelay);
            }
        }, 40);
    };

    const stopScramble = () => {
        if (scrambleIntervalId) clearInterval(scrambleIntervalId);
        if (loopTimeoutId) clearTimeout(loopTimeoutId);
        scrambleIntervalId = null;
        loopTimeoutId = null;
        displayedText = text;
    };

    // --- Determine element type and attributes ---
    $: tag = href ? "a" : "span";
    $: attrs = href ? { href } : { role: "button", tabindex: 0 };
</script>

<svelte:element
    this={tag}
    class={finalClasses}
    {...attrs}
    on:focus={scramble}
    on:mouseenter={scramble}
    on:blur={stopScramble}
    on:mouseleave={stopScramble}
    on:keydown={(e) => {
        if (!href && (e.key === "Enter" || e.key === " ")) scramble();
    }}>
    {displayedText}
</svelte:element>
