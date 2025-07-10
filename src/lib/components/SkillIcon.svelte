<script lang="ts">
    import { theme } from "$lib/stores/theme";

    export let lightSrc: string;
    export let darkSrc: string;
    export let alt: string;
    export let delay: number = 0;
</script>

<div
    class="group relative flex h-20 w-20 items-center justify-center"
    style="animation-delay: {delay}ms"
>
    <img
        src={$theme === "light" ? lightSrc : darkSrc}
        {alt}
        class="h-full w-full object-contain transition-all duration-300 animate-in animate-bounce-in group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_theme(colors.ctp.mauve)]"
    />
</div>
