<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { theme } from "$lib/stores/theme";
    import { language } from "$lib/stores/language";
    import { onMount } from "svelte";
    onMount(() => {
        theme.init();
        language.init();
    });
</script>

<div class="min-h-screen bg-ctp-crust font-sans text-ctp-text">
    <div
        class="container mx-auto max-w-5xl bg-ctp-base p-4 shadow-2xl shadow-ctp-crust"
    >
        <Header />
        <main class="p-4">
            <slot />
        </main>
        <Footer />
    </div>
</div>
