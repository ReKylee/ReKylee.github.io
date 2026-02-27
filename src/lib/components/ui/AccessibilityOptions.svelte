<script lang="ts">
    import { accessibility } from "$lib/stores/accessibility";
</script>

<fieldset class="flex flex-wrap items-center justify-center gap-4 text-sm text-ctp-subtext0">
    <legend class="sr-only">Accessibility Options</legend>

    <div class="flex items-center gap-2">
        <label for="crt-slider">CRT FX:</label>
        <input
            id="crt-slider"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={$accessibility.crtStrength}
            on:input={(event) =>
                accessibility.setCrtStrength(
                    Number((event.currentTarget as HTMLInputElement).value),
                )}
            class="w-24 accent-ctp-mauve" />
    </div>

    <button
        type="button"
        on:click={() => accessibility.toggleReducedMotion()}
        class="rounded border border-ctp-surface1 px-2 py-1 hover:border-ctp-green"
        aria-pressed={$accessibility.reducedMotion}>
        Reduce Motion: {$accessibility.reducedMotion ? "On" : "Off"}
    </button>

    <button
        type="button"
        on:click={() => accessibility.toggleHighContrast()}
        class="rounded border border-ctp-surface1 px-2 py-1 hover:border-ctp-green"
        aria-pressed={$accessibility.highContrast}>
        Contrast: {$accessibility.highContrast ? "High" : "Default"}
    </button>

    <button
        type="button"
        on:click={() => accessibility.toggleUiScale()}
        class="rounded border border-ctp-surface1 px-2 py-1 hover:border-ctp-green"
        aria-pressed={$accessibility.uiScale === "large"}>
        UI Scale: {$accessibility.uiScale === "large" ? "Large" : "Default"}
    </button>
</fieldset>
