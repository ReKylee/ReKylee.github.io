<script lang="ts">
    import type { Project } from "$lib/data/projects";
    import ProjectFile from "./ProjectFile.svelte";
    import { viewProject } from "$lib/stores/terminalStore";
    import BlinkingCursor from "../BlinkingCursor.svelte";
    export let projects: Project[];
</script>

<div>
    <p>> ls -l</p>
    <div class="my-4 flex flex-col gap-1">
        {#each projects as project (project.id)}
            <button
                class="ascii-file-container w-full text-left"
                on:click={() => viewProject(project)}
            >
                <ProjectFile {project} />
            </button>
        {/each}
    </div>
    <div class="flex items-center">
        <span>>&nbsp;</span>
        <BlinkingCursor />
    </div>
</div>
