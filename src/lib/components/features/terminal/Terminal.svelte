<script lang="ts">
    import { onMount } from "svelte";
    import { terminalStore, startBooting } from "$lib/stores/terminalStore";
    import BootSequence from "./BootSequence.svelte";
    import FileExplorer from "./FileExplorer.svelte";
    import ProjectView from "./ProjectView.svelte";
    import type { Project } from "$lib/types";

    let terminalElement: HTMLDivElement;
    export let projects: Project[];

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
    dir="ltr"
    lang="en"
    role="region"
    aria-label="Terminal project browser"
    class="relative flex h-[68dvh] min-h-[22rem] w-full flex-col overflow-hidden rounded border-2 border-ctp-surface0 bg-ctp-crust p-4 font-mono text-sm leading-relaxed text-ctp-green sm:h-[38rem] sm:min-h-[38rem] sm:max-h-[38rem] sm:text-base">
    <div
        class="mb-3 flex flex-shrink-0 gap-3 overflow-x-auto text-xs whitespace-nowrap sm:text-sm">
        <p>[COMMS_NODE] KYLEE-LINK</p>
        <p>[CHANNEL] PORTFOLIO_FEED</p>
        <p>[STATE] {$terminalStore.state.toUpperCase()}</p>
    </div>

    <div class="relative min-h-0 flex-1 overflow-hidden">
        {#if $terminalStore.state === "waiting"}
            <div class="absolute inset-0 overflow-auto p-2">
                <p>LINK STATUS: STANDBY_</p>
            </div>
        {:else if $terminalStore.state === "booting"}
            <div class="absolute inset-0 overflow-auto p-2">
                <BootSequence />
            </div>
        {:else if $terminalStore.state === "listing_files"}
            <div class="absolute inset-0 overflow-hidden p-2">
                <FileExplorer {projects} />
            </div>
        {:else if $terminalStore.state === "viewing_project" && $terminalStore.activeProject}
            <div class="absolute inset-0 overflow-hidden p-2">
                <ProjectView project={$terminalStore.activeProject} />
            </div>
        {/if}
    </div>
</div>
