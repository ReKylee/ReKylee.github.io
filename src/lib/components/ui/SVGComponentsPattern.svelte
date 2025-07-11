<script lang="ts">
    import type { Component } from "svelte";
    import type { SVGAttributes } from "svelte/elements";

    // --- TYPE DEFINITIONS ---
    // This is the correct, specific type for a Svelte component generated by an SVG plugin.
    type SvgComponent = Component<SVGAttributes<SVGSVGElement>>;
    // --- PROPS ---
    /** An array of imported Svelte SVG components for the pattern. */
    export let icons: SvgComponent[] = [];
    /** The size of each icon in the pattern. */
    export let scale: number = 50;
    /** The gap between pattern tiles. A larger value means lower density. */
    export let spacing: number = 100;
    /** The Tailwind CSS TEXT color class for the icons. */
    export let color: string = "text-ctp-surface1 dark:text-ctp-surface2";
    /** The overall opacity of the pattern. */
    /** The rotation angle for each icon in degrees. */
    export let rotation: number = -15;

    // --- CALCULATIONS ---
    // A unique ID for the pattern to prevent conflicts if you use it multiple times.
    const patternId = `master-pattern-${Math.random().toString(36).substring(7)}`;
    // The full size of one pattern tile.
    $: patternSize = scale + spacing;
</script>

{#if icons.length > 0}
    <div class="absolute inset-0 z-0 {color}" aria-hidden="true">
        <svg width="100%" height="100%">
            <defs>
                {#each icons as icon, i}
                    <symbol id="pattern-icon-{patternId}-{i}">
                        <svelte:component this={icon} />
                    </symbol>
                {/each}

                <pattern
                    id={patternId}
                    patternUnits="userSpaceOnUse"
                    width={patternSize}
                    height={patternSize}>
                    <animateTransform
                        attributeType="xml"
                        attributeName="patternTransform"
                        type="translate"
                        from="0 0"
                        to="{patternSize} {patternSize}"
                        begin="0"
                        dur="10s"
                        repeatCount="indefinite" />
                    {#each icons as _, i}
                        <use
                            href="#pattern-icon-{patternId}-{i}"
                            x={(i % 2) * (patternSize / 2)}
                            y={Math.floor(i / 2) * (patternSize / 2)}
                            width={scale}
                            height={scale}
                            transform="rotate({rotation}, {(i % 2) *
                                (patternSize / 2) +
                                scale / 2}, {Math.floor(i / 2) *
                                (patternSize / 2) +
                                scale / 2})"
                            fill="currentColor" />
                    {/each}
                </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#{patternId})" />
        </svg>
    </div>
{/if}

<div class="relative z-10">
    <slot></slot>
</div>
