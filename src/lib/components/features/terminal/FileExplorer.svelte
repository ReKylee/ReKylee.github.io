<script lang="ts">
    import type { Project } from "$lib/data/projects";
    import ProjectFile from "./ProjectFile.svelte";
    import { viewProject } from "$lib/stores/terminalStore";
    import BlinkingCursor from "../../ui/BlinkingCursor.svelte";
    import { fade } from "svelte/transition";
    export let projects: Project[];
</script>

<div in:fade>
    <p>> ls -l</p>
    <div class="my-4 flex flex-col gap-1">
        {#each projects as project, index ((project.id, index))}
            <button
                class="ascii-file-container w-full text-left"
                on:click={() => viewProject(project)}>
                <ProjectFile {project} />
            </button>
        {/each}
    </div>
    <div class="flex items-center">
        <p class="flex items-baseline">
            <span>>&nbsp;</span>
            <BlinkingCursor />
        </p>
    </div>
</div>
