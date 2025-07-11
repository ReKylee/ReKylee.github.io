<script lang="ts">
    import { crtHarshness } from "$lib/stores/crtStore";
</script>

<div class="flex items-center gap-2 text-sm text-ctp-subtext0">
    <label for="crt-slider">CRT FX:</label>
    <input
        id="crt-slider"
        type="range"
        min="0"
        max="1"
        step="0.05"
        bind:value={$crtHarshness}
        class="w-24 accent-ctp-mauve"
    />
</div>
