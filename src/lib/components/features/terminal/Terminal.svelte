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
    class="
    relative
    w-full
    h-[60vh]
    overflow-y-auto
    overflow-x-hidden
    font-mono
    text-sm
    sm:text-base
    leading-relaxed
    bg-ctp-crust
    text-ctp-green
    p-4
    rounded
    ascii-border
  ">
    {#if $terminalStore.state === "waiting"}
        <div class="absolute inset-0 p-4">
            <p>> STANDBY_</p>
        </div>
    {:else if $terminalStore.state === "booting"}
        <div class="absolute inset-0 p-4">
            <BootSequence />
        </div>
    {:else if $terminalStore.state === "listing_files"}
        <div class="absolute inset-0 p-4">
            <FileExplorer {projects} />
        </div>
    {:else if $terminalStore.state === "viewing_project" && $terminalStore.activeProject}
        <div class="absolute inset-0 p-4">
            <ProjectView project={$terminalStore.activeProject} />
        </div>
    {/if}
</div>
