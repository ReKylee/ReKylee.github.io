<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let y = 0;
    let hasMounted = false; // This is false on the server and for no-JS users

    // This reactive variable is only relevant for JS users
    $: showButton = y > 200;

    // This only runs in the browser
    onMount(() => {
        hasMounted = true;
    });

    // This click handler adds smooth scrolling for JS users
    const smoothScroll = (event: MouseEvent) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
</script>

<!-- Listen to the window's scroll position -->
<svelte:window bind:scrollY={y} />

<!--
  - For No-JS users: `hasMounted` is false, so the button is always visible.
  - For JS users: `hasMounted` is true, so the button is only visible when `showButton` is true.
-->
{#if !hasMounted || showButton}
    <a
        href="#page-top"
        on:click={smoothScroll}
        transition:fly={{ y: 100, duration: 300 }}
        class="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ctp-mauve text-ctp-base shadow-lg transition-all hover:scale-110 hover:bg-ctp-pink focus:outline-none focus:ring-2 focus:ring-ctp-pink focus:ring-offset-2 focus:ring-offset-ctp-base"
        aria-label="Scroll to top"
    >
        <!-- SVG arrow icon -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
        >
            <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
    </a>
{/if}
