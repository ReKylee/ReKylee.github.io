<script lang="ts">
import { onMount } from "svelte";
import { accessibility } from "$lib/stores/accessibility";
import { finishBooting } from "$lib/stores/terminalStore";

    const lines = [
        "ATZ",
        "ATDT KYLEE-BBS",
        "",
        "CONNECT 9600",
        "LOGIN: guest",
        "MESSAGE BASE: SCANNING NEW",
        "MAIN MENU READY. TYPE HELP.",
    ];

    const progressLineIndex = 2;
    const progressSlots = 20;
    let progressFill = 0;
    let progressText = "[░░░░░░░░░░░░░░░░░░░░] 0%";
    let visibleCount = 0;
    let hasCompleted = false;

    const lineStepMs = 430;
    const progressDurationMs = 1400;
    const completionHoldMs = 320;

    const getProgressText = () => {
        const filled = "▓".repeat(progressFill);
        const empty = "░".repeat(progressSlots - progressFill);
        const percent = Math.round((progressFill / progressSlots) * 100);
        return `[${filled}${empty}] ${percent}%`;
    };

    const setProgressFill = (next: number) => {
        progressFill = Math.max(0, Math.min(progressSlots, next));
        progressText = getProgressText();
    };

    onMount(() => {
        const reducedAtMount = $accessibility.reducedMotion;
        const start = performance.now();
        const progressStartMs = (progressLineIndex + 1) * lineStepMs;
        const doneMs = Math.max(lines.length * lineStepMs, progressStartMs + progressDurationMs);

        const intervalId = window.setInterval(() => {
            const elapsed = performance.now() - start;
            visibleCount = Math.min(lines.length, Math.floor(elapsed / lineStepMs) + 1);

            const progressElapsed = Math.max(0, elapsed - progressStartMs);
            const ratio = Math.min(1, progressElapsed / progressDurationMs);
            const nextFill = Math.round(progressSlots * ratio);
            setProgressFill(reducedAtMount ? Math.ceil(nextFill / 2) * 2 : nextFill);

            if (elapsed >= doneMs) {
                window.clearInterval(intervalId);
                visibleCount = lines.length;
                setProgressFill(progressSlots);
                if (!hasCompleted) {
                    hasCompleted = true;
                    window.setTimeout(finishBooting, completionHoldMs);
                }
            }
        }, 50);

        return () => {
            window.clearInterval(intervalId);
        };
    });
</script>

<div>
    {#each lines as line, i (i)}
        {#if i < visibleCount}
            {#if $accessibility.reducedMotion}
                <p>&gt; {i === progressLineIndex ? progressText : line}</p>
            {:else}
                <p class="opacity-0 animate-fade animate-duration-[0.1]">
                    &gt; {i === progressLineIndex ? progressText : line}
                </p>
            {/if}
        {/if}
    {/each}
</div>
