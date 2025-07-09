<script>
    import "../app.css";
    import { theme } from "$lib/stores/theme.js";
    import { language } from "$lib/stores/language.js";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    theme.init();
    language.init();
</script>

<div class="bg-ctp-base text-ctp-text transition-colors duration-300 {$language === 'he' ? 'lang-he' : 'lang-en'}" dir={$language === "he" ? "rtl" : "ltr"}>
    <Header />
    <main class="prose lg:prose-xl max-w-none">
        <slot />
    </main>
    <Footer />
</div>
