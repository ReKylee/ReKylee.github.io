<script lang="ts">
    import type { Component } from "svelte";
    import type { SVGAttributes } from "svelte/elements";

    // --- PROPS ---
    type SvgComponent = Component<SVGAttributes<SVGSVGElement>>;

    // --- PROPS ---
    /** An array of imported Svelte SVG components for the pattern. */
    export let icons: SvgComponent[] = [];

    /** The size of each icon in the pattern. */
    export let scale: number = 50;

    /** The gap between pattern tiles. A larger value means lower density. */
    export let spacing: number = 100;

    /** The Tailwind CSS class for the color of the icons. */
    export let color: string = "red";

    /** The rotation angle for each icon in degrees. */
    export let rotation: number = -15;

    // --- CALCULATIONS ---
    // The full size of one pattern tile.
    $: patternSize = scale + spacing;
    // How many icons to fit horizontally in one tile before repeating.
    $: iconsPerRow = 3;
</script>

{#if icons.length > 0}
    <div class="absolute inset-0 z-0" aria-hidden="true">
        <svg width="100%" height="100%">
            <defs>
                {#each icons as icon, i}
                    <symbol id="pattern-icon-{i}">
                        <svelte:component this={icon} />
                    </symbol>
                {/each}

                <pattern
                    id="master-pattern"
                    patternUnits="userSpaceOnUse"
                    width={patternSize * iconsPerRow}
                    height={patternSize}
                >
                    {#each icons as _icon, i}
                        <use
                            href="#pattern-icon-{i}"
                            x={(i % iconsPerRow) * patternSize +
                                patternSize / 2}
                            y={Math.floor(i / iconsPerRow) * patternSize +
                                patternSize / 2}
                            width={scale}
                            height={scale}
                            transform="rotate({rotation}, {(i % iconsPerRow) *
                                patternSize +
                                patternSize / 2 +
                                scale / 2}, {Math.floor(i / iconsPerRow) *
                                patternSize +
                                patternSize / 2 +
                                scale / 2})"
                        />
                    {/each}
                </pattern>
            </defs>

            <rect
                width="100%"
                height="100%"
                fill="url(#master-pattern)"
                {color}
            />
        </svg>
    </div>
{/if}

<div class="relative z-10">
    <slot></slot>
</div>
