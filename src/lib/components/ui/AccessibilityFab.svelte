<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import AccessibilityOptions from "$lib/components/ui/AccessibilityOptions.svelte";

    let isOpen = false;
    const panelId = "a11y-panel";
    let containerEl: HTMLDivElement;
    let triggerEl: HTMLButtonElement;

    const closePanel = () => {
        if (!isOpen) return;
        isOpen = false;
        triggerEl?.focus();
    };

    const onWindowClick = (event: MouseEvent) => {
        if (!isOpen) return;
        const target = event.target as Node | null;
        if (target && !containerEl?.contains(target)) {
            closePanel();
        }
    };

    const onWindowKeydown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            closePanel();
        }
    };

    onMount(() => {
        window.addEventListener("click", onWindowClick);
        window.addEventListener("keydown", onWindowKeydown);
        return () => {
            window.removeEventListener("click", onWindowClick);
            window.removeEventListener("keydown", onWindowKeydown);
        };
    });
</script>

<div bind:this={containerEl} class="fixed bottom-8 left-8 z-[60]" dir="ltr">
    {#if isOpen}
        <div
            id={panelId}
            in:fly={{ y: 12, duration: 180 }}
            out:fade={{ duration: 130 }}
            class="mb-3 w-[min(24rem,calc(100vw-4rem))] rounded-lg border-2 border-ctp-surface1 bg-ctp-mantle p-3 shadow-xl">
            <p class="mb-2 text-sm font-bold text-ctp-sky">Accessibility</p>
            <AccessibilityOptions />
        </div>
    {/if}

    <button
        bind:this={triggerEl}
        type="button"
        class="flex h-14 w-14 items-center justify-center rounded-full bg-ctp-surface0 text-ctp-green shadow-lg transition-all hover:scale-110 hover:bg-ctp-surface1 focus:outline-none focus:ring-2 focus:ring-ctp-green focus:ring-offset-2 focus:ring-offset-ctp-base"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label="Toggle accessibility options"
        on:click={() => (isOpen = !isOpen)}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6">
            <circle cx="12" cy="5" r="1.5" />
            <path d="M12 8v13" />
            <path d="M7.5 11h9" />
            <path d="M9.5 21l2.5-6 2.5 6" />
        </svg>
    </button>
</div>
