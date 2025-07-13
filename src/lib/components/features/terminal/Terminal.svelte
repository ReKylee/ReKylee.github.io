<script lang="ts">
    import { onMount } from "svelte";
    import { terminalStore, startBooting } from "$lib/stores/terminalStore";
    import BootSequence from "./BootSequence.svelte";
    import FileExplorer from "./FileExplorer.svelte";
    import ProjectView from "./ProjectView.svelte";

    import { projects } from "$lib/data/projects";

    let terminalElement: HTMLDivElement;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startBooting(); // Trigger the boot sequence
                        observer.unobserve(terminalElement); // Stop watching once triggered
                    }
                });
            },
            { threshold: 0.1 },
        );

        observer.observe(terminalElement);
    });
</script>

<div
    bind:this={terminalElement}
    class="font-mono bg-ctp-crust text-ctp-green h-[60vh] ascii-border">
    {#if $terminalStore.state === "waiting"}
        <p>> STANDBY_</p>
    {:else if $terminalStore.state === "booting"}
        <BootSequence />
    {:else if $terminalStore.state === "listing_files"}
        <FileExplorer {projects} />
    {:else if $terminalStore.state === "viewing_project" && $terminalStore.activeProject}
        <ProjectView project={$terminalStore.activeProject} />
    {/if}
</div>
