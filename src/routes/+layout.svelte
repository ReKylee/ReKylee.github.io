<script>
    import "../app.css";
    import { theme } from '$lib/stores/theme.js';
    import { language } from '$lib/stores/language.js';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    theme.init();
    language.init();
</script>

<div dir={$language === 'he' ? 'rtl' : 'ltr'}>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>
