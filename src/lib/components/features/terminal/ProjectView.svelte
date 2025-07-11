<script lang="ts">
    import type { Project } from "$lib/data/projects";
    import { closeProject } from "$lib/stores/terminalStore";
    import GlitchText from "../../ui/GlitchText.svelte";
    import { fade } from "svelte/transition";

    export let project: Project;
</script>

<div transition:fade>
    <header class="mb-4 pb-2">
        <p>> cat {project.title}.{project.extension}</p>
        <div class="ascii-hr mt-2"></div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-x-4">
        <div class="visual-container mb-8 md:mb-0">
            {#if project.visual.type === "image"}
                <img
                    src={project.visual.src}
                    alt={project.title}
                    class="w-full h-auto border-2 border-ctp-surface1 p-1"
                />
            {:else if project.visual.type === "video"}
                <video
                    controls
                    class="w-full h-auto border-2 border-ctp-surface1 p-1"
                >
                    <source src={project.visual.src} type="video/mp4" />
                    <track
                        kind="captions"
                        src={project.visual.src.replace(".mp4", ".vtt")}
                        srclang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            {/if}
        </div>

        <div class="hidden md:flex flex-col items-center text-ctp-surface1">
            <span>|</span><span>|</span><span>|</span><span>|</span><span
                >|</span
            ><span>|</span><span>|</span><span>|</span><span>|</span><span
                >|</span
            ><span>|</span><span>|</span><span>|</span><span>|</span><span
                >|</span
            >
        </div>

        <div class="details-container">
            <h3 class="text-2xl mb-2">
                <GlitchText text={project.title} color="sky" size="2xl" />
            </h3>
            <p class="text-ctp-text mb-4 whitespace-pre-wrap">
                {project.description}
            </p>
        </div>
    </div>

    <footer class="mt-8 pt-4">
        <div class="ascii-hr"></div>
        <button
            on:click={closeProject}
            class="text-ctp-red hover:bg-ctp-red hover:text-ctp-base p-1"
            >[EXIT]</button
        >
    </footer>
</div>
