<script lang="ts">
    import { theme } from "$lib/stores/theme";
    import type { Component } from "svelte";
    import type { SVGAttributes } from "svelte/elements";

    type SvgComponent = Component<SVGAttributes<SVGSVGElement>>;

    /** The Svelte component for the icon to display in light mode. */
    export let lightIcon: SvgComponent;

    /** The Svelte component for the icon to display in dark mode. */
    export let darkIcon: SvgComponent;

    /** The accessible description for the icon. */
    export let alt: string;

    /** An optional animation delay. */
    export let delay: number = 0;

    $: iconToRender = $theme === "light" ? lightIcon : darkIcon;
</script>

<div
    class="group relative flex h-20 w-20 items-center justify-center"
    style="animation-delay: {delay}ms"
    role="img"
    aria-label={alt}>
    <svelte:component
        this={iconToRender}
        class="h-full w-full object-contain transition-all duration-300 animate-in animate-bounce-in group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_theme(colors.ctp.mauve)]" />
</div>
