<script>
    import "../app.css";
    import { theme } from "$lib/stores/theme.js";
    import { language } from "$lib/stores/language.js";
    import Journal from "$lib/components/Journal.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";

    theme.init();
    language.init();
</script>

<div
    class="bg-ctp-base text-ctp-text transition-colors duration-300 {$language ===
    'he'
        ? 'lang-he'
        : 'lang-en'} min-h-screen flex flex-col"
    dir={$language === "he" ? "rtl" : "ltr"}
>
    <Header />
    <div class="flex-grow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 px-4">
		<!-- Sidebar -->
		<aside class="md:sticky top-24 h-full">
			<Journal />
		</aside>

		<!-- Main Content -->
		<main class="prose lg:prose-xl max-w-none flex-grow py-8 overflow-y-auto">
			<slot />
			<Footer />
		</main>
	</div>
</div>
