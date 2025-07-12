<script>
    import Nav from "$lib/components/layout/Nav.svelte";
    import ThemeSwitch from "$lib/components/ui/ThemeSwitch.svelte";
    import { t, language } from "$lib/stores/language";
    import GlitchText from "../ui/GlitchText.svelte";
</script>

<header
    class="mb-8 flex flex-col items-center justify-between border-b-2 border-ctp-surface1 pb-4 md:flex-row"
    dir="ltr">
    <div class="flex items-center relative mb-4 md:mb-0">
        <img
            src="./favicon.svg"
            alt="Kylee's Logo"
            class="h-18 mr-4 inline-block" />
        <GlitchText
            text={$t("name")}
            loopDelay={1500}
            revealOrder="random"
            size="3xl"
            color="mauve" />
    </div>
    <Nav />
    <div class="flex items-center space-x-4">
        <ThemeSwitch />
        <button
            on:click={() => language.setLang($language === "en" ? "he" : "en")}
            class="font-bold text-ctp-sky transition-colors hover:text-ctp-mauve">
            {$language === "en" ? "HE" : "EN"}
        </button>
    </div>
</header>
