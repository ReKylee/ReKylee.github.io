<script>
    import "../app.css";
    import { theme } from "$lib/stores/theme.js";
    import { language } from "$lib/stores/language.js";
    import Journal from "$lib/components/Journal.svelte";
    import Footer from "$lib/components/Footer.svelte";

    theme.init();
    language.init();
</script>

<div class="bg-ctp-base text-ctp-text transition-colors duration-300 {$language === 'he' ? 'lang-he' : 'lang-en'} flex min-h-screen" dir={$language === "he" ? "rtl" : "ltr"}>
    <Journal />
    <div class="flex-grow flex flex-col container mx-auto px-4">
        <main class="prose lg:prose-xl max-w-none flex-grow py-8">
            <slot />
        </main>
        <Footer />
    </div>
</div>
