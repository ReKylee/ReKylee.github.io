<script lang="ts">
    import { onMount } from "svelte";
    import { finishBooting } from "$lib/stores/terminalStore";

    const lines = [
        "INITIATING KYLEE.OS v2.4...",
        "CHECKING SYSTEM MEMORY...",
        "[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%",
        "MOUNTING VFS...",
        "LOADING USER PROFILE...",
        "ACCESS GRANTED.",
        "Welcome, Guest.",
    ];

    let displayedLines: string[] = [];

    onMount(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < lines.length) {
                displayedLines = [...displayedLines, lines[i]];
                i++;
            } else {
                clearInterval(interval);
                setTimeout(finishBooting, 500); // Wait a moment before switching view
            }
        }, 300); // Speed of the boot sequence
    });
</script>

<div>
    {#each displayedLines as line}
        <p>> {line}</p>
    {/each}
    <span class="blinking-cursor h-5 w-2 bg-ctp-green inline-block"></span>
</div>
