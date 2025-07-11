<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { theme } from "$lib/stores/theme";
    import { language } from "$lib/stores/language";
    import { browser } from "$app/environment";
    import ScrollToTop from "$lib/components/ScrollToTop.svelte";
    import CRTFilter from "$lib/components/CRTFilter.svelte";
    theme.init();
    language.init();

    $: if (browser) {
        document.documentElement.dir = $language === "he" ? "rtl" : "ltr";
    }
</script>

<div class="crt-wrapper">
    <div class="min-h-screen bg-ctp-crust font-sans text-ctp-text">
        <div
            id="page-top"
            class="container mx-auto max-w-5xl bg-ctp-base p-4 shadow-2xl shadow-ctp-crust"
        >
            <Header />
            <main class="p-4">
                <slot />
            </main>
            <Footer />
        </div>

        <ScrollToTop />
    </div>
</div>

<CRTFilter />
