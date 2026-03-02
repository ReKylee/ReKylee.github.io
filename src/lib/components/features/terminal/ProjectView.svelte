<script lang="ts">
    import { onMount } from "svelte";
    import type { Project } from "$lib/types";
    import { accessibility } from "$lib/stores/accessibility";
    import { closeProject } from "$lib/stores/terminalStore";
    import { crtShutdown } from "$lib/transitions/crtShutdown";
    import { fade } from "svelte/transition";
    export let project: Project;
    // TODO: Redesign project view layout/content hierarchy while preserving terminal aesthetic.

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
    const FIELD_LABEL = "SOURCE  :: ";
    const FIELD_INDENT = " ".repeat(FIELD_LABEL.length);
    const line = (label: string, value = "") =>
        `|${(` ${label}${value}`).slice(0, CONTENT_WIDTH).padEnd(CONTENT_WIDTH, " ")}|`;
    const splitForField = (label: string, value: string) => {
        const prefix = ` ${label}`;
        const width = Math.max(8, CONTENT_WIDTH - prefix.length);
        const normalized = value.trim();
        if (!normalized) return [""];

        const breakChars = new Set(["/", "?", "&", "=", "#", "-", "_", "."]);
        const segments: string[] = [];
        let remaining = normalized;

        while (remaining.length > width) {
            let breakAt = -1;
            for (let i = 0; i < width; i++) {
                if (breakChars.has(remaining[i])) {
                    breakAt = i + 1;
                }
            }

            if (breakAt <= 0) {
                breakAt = width;
            }

            segments.push(remaining.slice(0, breakAt));
            remaining = remaining.slice(breakAt);
        }

        segments.push(remaining);
        return segments.filter((segment) => segment.length > 0);
    };
    $: descLines = wrap(project.description, CONTENT_WIDTH - 2);
    $: visualSrc = project.visual?.src ?? "";
    $: visualSrcLower = visualSrc.toLowerCase();
    $: isVideoAsset = visualSrcLower.endsWith(".mp4");
    $: videoMimeType = "video/mp4";
    $: sourceLink = project.links?.github ?? "";
    $: previewLink = project.links?.live ?? "";
    $: sourceChunks = splitForField(FIELD_LABEL, sourceLink || "NONE");
    $: previewChunks = splitForField("PREVIEW :: ", previewLink || "NONE");
    $: printout = [
        BORDER,
        line("SUBJ    :: ", project.title),
        line("MSG#    :: ", project.id.toUpperCase()),
        line("POSTED  :: ", project.date),
        line("FORMAT  :: ", project.extension.toUpperCase()),
        line("KEYWORDS:: ", project.tech.join(" | ")),
        BORDER,
        line("TEXT"),
        ...descLines.map((entry) => line("", entry)),
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
        <p>READ MAIL {project.id.toUpperCase()}</p>
    </header>

    <main class="flex-grow overflow-auto min-h-0">
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-x-4">
            <div class="visual-container mb-8 md:mb-0">
                {#if project.visual && project.visual.src}
                    {#if project.visual.type === "image" && !isVideoAsset}
                        <img
                            src={project.visual.src}
                            alt={project.title}
                            class="w-full h-auto border-2 border-ctp-surface1 p-1"
                            on:error={(e) => {
                                (
                                    e.currentTarget as HTMLImageElement
                                ).style.display = "none";
                            }} />
                    {:else if project.visual.type === "video" || isVideoAsset}
                        <video
                            autoplay
                            loop
                            muted
                            playsinline
                            class="w-full h-auto border-2 border-ctp-surface1 p-1">
                            <source src={project.visual.src} type={videoMimeType} />
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
                <div class="ascii-link-block mt-0 text-xs sm:text-sm">
                    {#if sourceLink}
                        <a
                            href={sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="ascii-link-group">
                            {#each sourceChunks as chunk, index (`source-${index}`)}
                                <span class="ascii-link-line">
                                    <span class="ascii-side">|</span>
                                    <span class="ascii-label">{index === 0 ? ` ${FIELD_LABEL}` : ` ${FIELD_INDENT}`}</span>
                                    <span class="ascii-link-value">{chunk}</span>
                                    <span class="ascii-side">|</span>
                                </span>
                            {/each}
                        </a>
                    {:else}
                        {#each sourceChunks as chunk, index (`source-${index}`)}
                            <p class="ascii-link-line">
                                <span class="ascii-side">|</span>
                                <span class="ascii-label">{index === 0 ? ` ${FIELD_LABEL}` : ` ${FIELD_INDENT}`}</span>
                                <span class="ascii-link-value">{chunk}</span>
                                <span class="ascii-side">|</span>
                            </p>
                        {/each}
                    {/if}
                    {#if previewLink}
                        <a
                            href={previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="ascii-link-group">
                            {#each previewChunks as chunk, index (`preview-${index}`)}
                                <span class="ascii-link-line">
                                    <span class="ascii-side">|</span>
                                    <span class="ascii-label">{index === 0 ? " PREVIEW :: " : ` ${FIELD_INDENT}`}</span>
                                    <span class="ascii-link-value">{chunk}</span>
                                    <span class="ascii-side">|</span>
                                </span>
                            {/each}
                        </a>
                    {:else}
                        {#each previewChunks as chunk, index (`preview-${index}`)}
                            <p class="ascii-link-line">
                                <span class="ascii-side">|</span>
                                <span class="ascii-label">{index === 0 ? " PREVIEW :: " : ` ${FIELD_INDENT}`}</span>
                                <span class="ascii-link-value">{chunk}</span>
                                <span class="ascii-side">|</span>
                            </p>
                        {/each}
                    {/if}
                    <p class="ascii-border-line">{BORDER}</p>
                </div>
            </div>
        </div>
    </main>

    <footer class="mt-4 pt-4 flex-shrink-0">
        <button
            on:click={closeProject}
            aria-label="Close project window"
            class="text-ctp-red hover:bg-ctp-red hover:text-ctp-base p-1"
            >[RETURN TO MENU]</button>
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

    .ascii-link-block {
        max-width: 100%;
    }

    .ascii-link-line {
        display: grid;
        grid-template-columns: auto auto minmax(0, 1fr) auto;
        align-items: baseline;
        margin: 0;
        white-space: nowrap;
    }

    .ascii-link-group {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    .ascii-side,
    .ascii-label {
        color: var(--color-ctp-text);
    }

    .ascii-link-value {
        min-width: 0;
        white-space: nowrap;
        color: var(--color-ctp-blue);
        text-decoration: none;
    }

    .ascii-link-group:hover .ascii-link-value,
    .ascii-link-group:focus-visible .ascii-link-value {
        text-decoration: underline;
    }

    .ascii-border-line {
        margin: 0;
        color: var(--color-ctp-text);
    }
</style>
