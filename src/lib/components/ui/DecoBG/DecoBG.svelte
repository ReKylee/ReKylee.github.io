<script lang="ts">
    /** Controls the overall opacity of the pattern. */
    export let density: number = 0.1;
</script>

<div
    class="absolute inset-0 z-0 text-ctp-surface1 dark:text-ctp-surface2"
    style="opacity: {density}; --pattern-color: currentColor;"
    aria-hidden="true"
>
    <svg width="100%" height="100%">
        <rect width="100%" height="100%" fill="url(#controller-pattern)" />
    </svg>
</div>

<div class="relative z-10">
    <slot></slot>
</div>
