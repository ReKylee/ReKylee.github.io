<script lang="ts">
    import { onMount } from "svelte";
    import type { Project } from "$lib/types";
    import ProjectFile from "./ProjectFile.svelte";
    import { viewProject } from "$lib/stores/terminalStore";
    import { accessibility } from "$lib/stores/accessibility";
    import BlinkingCursor from "../../ui/BlinkingCursor.svelte";
    import { fade } from "svelte/transition";
    export let projects: Project[];

    let activeIndex = 0;
    let fileButtons: HTMLButtonElement[] = [];
    let listboxEl: HTMLDivElement;
    const focusIndex = (index: number) => {
        const bounded = Math.max(0, Math.min(projects.length - 1, index));
        activeIndex = bounded;
        fileButtons[bounded]?.focus();
    };

    const onKeydown = (event: KeyboardEvent) => {
        if (projects.length === 0) return;

        if (event.key === "ArrowDown") {
            event.preventDefault();
            focusIndex(activeIndex + 1);
            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            focusIndex(activeIndex - 1);
            return;
        }

        if (event.key === "Home") {
            event.preventDefault();
            focusIndex(0);
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            focusIndex(projects.length - 1);
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            viewProject(projects[activeIndex]);
        }
    };

    onMount(() => {
        // Ensure keyboard navigation works immediately without extra click.
        requestAnimationFrame(() => focusIndex(0));

        const shouldCaptureSlash = (event: KeyboardEvent) =>
            (event.key === "/" || event.code === "Slash") &&
                !event.ctrlKey &&
                !event.metaKey &&
                !event.altKey;

        const onWindowKeydown = (event: KeyboardEvent) => {
            if (!shouldCaptureSlash(event)) return;

            const target = event.target as HTMLElement | null;
            const isTypingTarget =
                target?.tagName === "INPUT" ||
                target?.tagName === "TEXTAREA" ||
                target?.isContentEditable;
            if (isTypingTarget) return;

            event.preventDefault();
            if (projects.length > 0) {
                focusIndex(activeIndex);
            } else {
                listboxEl?.focus();
            }
        };

        // Use capture so browser quick-find does not intercept slash first.
        window.addEventListener("keydown", onWindowKeydown, { capture: true });
        return () =>
            window.removeEventListener("keydown", onWindowKeydown, {
                capture: true,
            });
    });
</script>

<div
    in:fade={{ duration: $accessibility.reducedMotion ? 0 : 150 }}
    class="flex h-full min-h-0 flex-col">
    <div class="w-full">
        <p class="text-ctp-green">RX: ARCHIVE TRAFFIC ONLINE</p>
        <p class="text-xs text-ctp-subtext0">
            MODE: RADIO LOG | ARROWS: NAV | ENTER: OPEN TRANSMISSION
        </p>
        <p class="mt-1 text-xs text-ctp-subtext1">CHANNELS: 01-09 | STREAM: STABLE</p>
    </div>
    <div
        class="my-4 min-h-0 flex-1 overflow-auto">
        <div class="w-full space-y-1">
            <div
                bind:this={listboxEl}
                role="listbox"
                aria-label="Projects"
                tabindex="0"
                on:keydown={onKeydown}
                class="flex flex-col gap-1">
                {#each projects as project, index ((project.id, index))}
                    <button
                        bind:this={fileButtons[index]}
                        class="ascii-file-container w-full rounded-sm px-1 py-1 text-left transition-colors"
                        role="option"
                        aria-selected={index === activeIndex}
                        tabindex={index === activeIndex ? 0 : -1}
                        on:focus={() => (activeIndex = index)}
                        on:mouseenter={() => (activeIndex = index)}
                        on:click={() => viewProject(project)}>
                        <ProjectFile {project} {index} />
                    </button>
                {/each}
            </div>
        </div>
    </div>
    <div class="mt-1 flex w-full flex-shrink-0 items-center">
        <p class="flex items-baseline">
            <span>RX_READY&gt;&nbsp;</span>
            <BlinkingCursor />
        </p>
    </div>
</div>
