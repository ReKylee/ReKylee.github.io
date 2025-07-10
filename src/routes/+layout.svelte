<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { theme } from "$lib/stores/theme";
    import { language } from "$lib/stores/language";
    import { browser } from "$app/environment";

    theme.init();
    language.init();

    $: if (browser) {
        document.documentElement.dir = $language === "he" ? "rtl" : "ltr";
    }
</script>

<div class="min-h-screen bg-ctp-crust text-ctp-text" class:font-sans={$language === 'en'} class:font-hebrew={$language === 'he'}>
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
