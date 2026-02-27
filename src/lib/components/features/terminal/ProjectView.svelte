<script lang="ts">
    import { onMount } from "svelte";
    import type { Project } from "$lib/types";
    import { accessibility } from "$lib/stores/accessibility";
    import { closeProject } from "$lib/stores/terminalStore";
    import { crtShutdown } from "$lib/transitions/crtShutdown";
    import { fade } from "svelte/transition";
    export let project: Project;

    const wrap = (text: string, width: number) => {
        const words = text.split(/\s+/);
        const lines: string[] = [];
        let current = "";
        for (const word of words) {
            const candidate = current ? `${current} ${word}` : word;
            if (candidate.length > width) {
                if (current) lines.push(current);
                current = word;
            } else {
                current = candidate;
            }
        }
        if (current) lines.push(current);
        return lines;
    };

    const BOX_WIDTH = 60;
    const CONTENT_WIDTH = BOX_WIDTH - 2;
    const BORDER = `+${"-".repeat(CONTENT_WIDTH)}+`;
    const line = (label: string, value = "") =>
        `|${(` ${label}${value}`).slice(0, CONTENT_WIDTH).padEnd(CONTENT_WIDTH, " ")}|`;
    $: descLines = wrap(project.description, CONTENT_WIDTH - 2);
    $: printout = [
        BORDER,
        line("RECORD :: ", project.title),
        line("ID     :: ", project.id.toUpperCase()),
        line("STAMP  :: ", project.date),
        line("CLASS  :: ", project.extension.toUpperCase()),
        line("TECH   :: ", project.tech.join(" | ")),
        BORDER,
        line("BRIEFING"),
        ...descLines.map((entry) => line("", entry)),
        BORDER,
        line("CODE UPLINK :: ", project.links?.github ? "ONLINE" : "OFFLINE"),
        line("LIVE UPLINK :: ", project.links?.live ? "ONLINE" : "OFFLINE"),
        BORDER,
    ].join("\n");

    let viewEl: HTMLDivElement;
    const onKeydown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeProject();
        }
    };

    onMount(() => {
        requestAnimationFrame(() => viewEl?.focus());
    });
</script>

<div
    bind:this={viewEl}
    role="dialog"
    aria-modal="true"
    aria-label={`Project view: ${project.title}`}
    tabindex="0"
    on:keydown={onKeydown}
    in:fade={{ duration: $accessibility.reducedMotion ? 0 : 150 }}
    out:crtShutdown={{ duration: $accessibility.reducedMotion ? 0 : 550 }}
    class="project-view absolute inset-0 flex h-full max-h-full min-h-0 flex-col">
    <header class="mb-4 flex-shrink-0">
        <p>RX: OPEN_RECORD {project.id.toUpperCase()}</p>
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
                            }} />
                    {:else if project.visual.type === "video"}
                        <video controls class="w-full h-auto border-2 border-ctp-surface1 p-1">
                            <source src={project.visual.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    {:else if project.visual.type === "embed"}
                        <div class="aspect-video w-full border-2 border-ctp-surface1 p-1">
                            <iframe
                                src={project.visual.src}
                                class="w-full h-full"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                title={project.title}></iframe>
                        </div>
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
                <pre class="text-ctp-text text-xs sm:text-sm overflow-x-auto">{printout}</pre>
            </div>
        </div>
    </main>

    <footer class="mt-4 pt-4 flex-shrink-0">
        <button
            on:click={closeProject}
            aria-label="Close project window"
            class="text-ctp-red hover:bg-ctp-red hover:text-ctp-base p-1"
            >[TERMINATE LINK]</button>
    </footer>
</div>

<style>
    .project-view {
        display: flex;
        flex-direction: column;
        min-height: 0;
        max-height: 100%;
    }

    main {
        flex-grow: 1;
        overflow-y: auto;
        min-height: 0;
    }

    footer {
        flex-shrink: 0;
    }
</style>
