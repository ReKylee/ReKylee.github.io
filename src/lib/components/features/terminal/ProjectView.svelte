<script lang="ts">
    import type { Project } from "$lib/data/projects";
    import { closeProject } from "$lib/stores/terminalStore";
    import { crtShutdown } from "$lib/transitions/crtShutdown";
    import { fade } from "svelte/transition";
    import GlitchText from "../../ui/GlitchText.svelte";
    export let project: Project;
</script>

<div
    in:fade
    out:crtShutdown
    class="project-view flex flex-col h-full max-h-full min-h-0">
    <header class="mb-4 pb-2 flex-shrink-0">
        <p>> cat {project.title}.{project.extension}</p>
        <div class="ascii-hr mt-2"></div>
    </header>

    <main class="flex-grow overflow-auto min-h-0">
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-x-4">
            <div class="visual-container mb-8 md:mb-0">
                {#if project.visual && project.visual.src}
                    {#if project.visual.type === "image"}
                        <img
                            src={project.visual.src}
                            alt={project.title}
                            class="w-full h-auto border-2 border-ctp-surface1 p-1"
                            on:error={(e) => {
                                (
                                    e.currentTarget as HTMLImageElement
                                ).style.display = "none";
                                console.warn(
                                    `Image failed to load: ${project.visual.src}`,
                                );
                            }} />
                    {:else if project.visual.type === "video"}
                        <video
                            controls
                            class="w-full h-auto border-2 border-ctp-surface1 p-1"
                            on:error={() =>
                                console.warn(
                                    `Video failed to load: ${project.visual.src}`,
                                )}>
                            <source src={project.visual.src} type="video/mp4" />
                            <track
                                kind="captions"
                                src={project.visual.src.replace(".mp4", ".vtt")}
                                srclang="en"
                                label="English" />
                            Your browser does not support the video tag.
                        </video>
                    {:else if project.visual.type === "embed"}
                        <div
                            class="aspect-video w-full border-2 border-ctp-surface1 p-1">
                            <iframe
                                src={project.visual.src}
                                class="w-full h-full"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                title={project.title}
                                on:load={() =>
                                    console.log("Embed iframe loaded")}
                                on:error={() =>
                                    console.warn(
                                        `Embed failed to load: ${project.visual.src}`,
                                    )}></iframe>
                        </div>
                    {:else}
                        <p class="text-sm italic text-ctp-subtext0">
                            Unknown visual type: {project.visual.type}
                        </p>
                    {/if}
                {:else}
                    <p class="text-sm italic text-ctp-subtext0">
                        No visual available for this project.
                    </p>
                {/if}
            </div>

            <div class="hidden md:flex flex-col items-center text-ctp-surface1">
                <span>|</span><span>|</span><span>|</span><span>|</span><span
                    >|</span
                ><span>|</span><span>|</span><span>|</span><span>|</span><span
                    >|</span
                ><span>|</span><span>|</span><span>|</span><span>|</span><span
                    >|</span>
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
    </main>

    <footer class="mt-4 pt-4 flex-shrink-0 border-t border-ctp-surface1">
        <button
            on:click={closeProject}
            class="text-ctp-red hover:bg-ctp-red hover:text-ctp-base p-1"
            >[EXIT]</button>
    </footer>
</div>

<style>
    /* Ensure the project-view container fills parent and sets up flex layout */
    .project-view {
        /* height handled by parent container (set h-full on parent) */
        display: flex;
        flex-direction: column;
        /* min-h-0 required to allow flex children with overflow to shrink */
        min-height: 0;
        max-height: 100%;
    }

    main {
        /* This allows main to grow and scroll inside flex container */
        flex-grow: 1;
        overflow-y: auto;
        min-height: 0; /* essential for correct overflow inside flex */
    }

    footer {
        /* fixed height footer, flex-shrink: 0 keeps it visible */
        flex-shrink: 0;
        border-top: 1px solid var(--ctp-surface1);
    }
</style>
