<script lang="ts">
    /** Controls the overall opacity of the pattern. */
    export let density: number = 1;
</script>

<div
    class="absolute inset-0 z-0 text-ctp-surface1 dark:text-ctp-surface2"
    style="opacity: {density};"
    aria-hidden="true"
>
    <svg width="100%" height="100%">
        <slot name="defs"></slot>
        <!-- might need class="fill-current" -->
        <rect width="100%" height="100%" fill="url(#controller-pattern)" />
    </svg>
</div>

<div class="relative z-10">
    <slot></slot>
</div>
