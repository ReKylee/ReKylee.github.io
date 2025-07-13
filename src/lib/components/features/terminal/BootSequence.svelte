<script lang="ts">
    import BlinkingCursor from "$lib/components/ui/BlinkingCursor.svelte";
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
</script>

<div>
    {#each lines as line, i}
        {#if i === lines.length - 1}
            <p
                on:animationend={finishBooting}
                class="opacity-0 animate-fade animate-duration-[1]"
                style="animation-delay: {i * 0.3}s">
                &gt; {line}
            </p>
        {:else}
            <p
                class="opacity-0 animate-fade animate-duration-[0.1]"
                style="animation-delay: {i * 0.3}s">
                &gt; {line}
            </p>
        {/if}
    {/each}

    <BlinkingCursor />
</div>
