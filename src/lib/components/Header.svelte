<script>
    import Nav from "$lib/components/Nav.svelte";
    import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
    import { t, language } from "$lib/stores/language";
</script>

<header
    class="mb-8 flex flex-col items-center justify-between border-b-2 border-ctp-surface1 pb-4 md:flex-row"
    dir="ltr"
>
    <div class="relative mb-4 text-2xl font-bold md:mb-0">
        <span class="glitch text-ctp-pink" data-text={$t("name")}>
            {$t("name")}
        </span>
    </div>
    <Nav />
    <div class="flex items-center space-x-4">
        <ThemeSwitch />
        <button
            on:click={() => language.setLang($language === "en" ? "he" : "en")}
            class="font-bold text-ctp-sky transition-colors hover:text-ctp-mauve"
        >
            {$language === "en" ? "HE" : "EN"}
        </button>
    </div>
</header>
