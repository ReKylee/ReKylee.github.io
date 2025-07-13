<script lang="ts">
    import { onMount } from "svelte";

    // This function updates the CSS variable on the root <html> element
    const updateHarshness = (value: number) => {
        if (typeof document !== "undefined") {
            document.documentElement.style.setProperty(
                "--harshness",
                value.toString(),
            );
        }
    };

    // We'll use a local variable to bind to the slider
    let harshnessValue = 0.15;

    // When the slider value changes, update the CSS variable
    $: updateHarshness(harshnessValue);

    // Set the initial value when the component mounts
    onMount(() => {
        updateHarshness(harshnessValue);
    });
</script>

<div class="flex items-center gap-2 text-sm text-ctp-subtext0">
    <label for="crt-slider">CRT FX:</label>
    <input
        id="crt-slider"
        type="range"
        min="0"
        max="1"
        step="0.05"
        bind:value={harshnessValue}
        class="w-24 accent-ctp-mauve" />
</div>
