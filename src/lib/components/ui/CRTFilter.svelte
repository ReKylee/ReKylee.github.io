<script lang="ts">
    import { crtHarshness } from "$lib/stores/crtStore";
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

    // Subscribe to the store and call the update function whenever the value changes
    crtHarshness.subscribe(updateHarshness);

    // Set the initial value when the component mounts
    onMount(() => {
        updateHarshness($crtHarshness);
    });
</script>
