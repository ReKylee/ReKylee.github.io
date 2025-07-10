<script>
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import LangToggle from "./LangToggle.svelte";
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-ctp-base p-4 flex justify-between items-center shadow-lg" dir="ltr">
    <a href="/" aria-label="Homepage">
        <img src="/favicon.svg" alt="Logo" class="h-8 w-8">
    </a>
    <div class="flex items-center gap-4">
        <ThemeSwitch />
        <LangToggle />
    </div>
</header>
