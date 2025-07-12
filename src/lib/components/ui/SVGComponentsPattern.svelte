<script lang="ts">
    import type { Component } from "svelte";
    import type { SVGAttributes } from "svelte/elements";

    type SvgComponent = Component<SVGAttributes<SVGSVGElement>>;

    export let icons: SvgComponent[] = [];
    export let scale = 50;
    export let spacing = 100;
    export let rotation = -15;
    export let color = "text-ctp-surface2 dark:text-ctp-surface0";

    // Unique ID for pattern
    const patternId = `pattern-${Math.random().toString(36).slice(2, 9)}`;

    $: count = icons.length;
    $: cols = Math.ceil(Math.sqrt(count));
    $: rows = Math.ceil(count / cols);
    $: cells = rows * cols;

    // Pattern tile dimensions
    $: tileWidth = cols * (scale + spacing);
    $: tileHeight = rows * (scale + spacing);
</script>

{#if icons.length > 0}
    <div
        class="absolute inset-0 pointer-events-none {color}"
        aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {#each icons as Icon, i}
                    <symbol
                        id="icon-{patternId}-{i}"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet">
                        <Icon />
                    </symbol>
                {/each}

                <pattern
                    id={patternId}
                    patternUnits="userSpaceOnUse"
                    width={tileWidth}
                    height={tileHeight}>
                    <animateTransform
                        attributeName="patternTransform"
                        type="translate"
                        from="0 0"
                        to="{tileWidth} {tileHeight}"
                        dur="20s"
                        repeatCount="indefinite" />

                    {#each Array(cells) as _, i}
                        <use
                            href="#icon-{patternId}-{i % icons.length}"
                            x={(i % cols) * (scale + spacing)}
                            y={Math.floor(i / cols) * (scale + spacing)}
                            width={scale}
                            height={scale}
                            transform="rotate({rotation}, 
                {(i % cols) * (scale + spacing) + scale / 2}, 
                {Math.floor(i / cols) * (scale + spacing) + scale / 2})"
                            fill="currentColor" />
                    {/each}
                </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#{patternId})" />
        </svg>
    </div>
{/if}

<div class="relative z-10">
    <slot />
</div>
