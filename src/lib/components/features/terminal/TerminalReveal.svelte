<script lang="ts">
    export let lineHeight = 24; // height of one "line", adjust to match your font
    export let lines = 20; // number of visual lines (used only for animation steps)
    export let duration = 1000; // total animation time
</script>

<div
    class="flex flex-col overflow-hidden relative h-full w-full"
    style="
        --lineHeight: {lineHeight}px;
        --lines: {lines};
        --duration: {duration}ms;
    ">
    <div class="scrolling-content overflow-auto flex-grow">
        <slot />
    </div>
</div>

<style>
    .scrolling-content {
        animation: scrollUp var(--duration) steps(var(--lines)) forwards;
        will-change: transform;
        height: 100%;
    }

    @keyframes scrollUp {
        from {
            transform: translateY(calc(var(--lineHeight) * var(--lines)));
        }
        to {
            transform: translateY(0);
        }
    }
</style>
