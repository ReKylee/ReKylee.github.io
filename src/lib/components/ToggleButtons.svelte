<script>
    import { language, t } from "$lib/stores/language.js";
    import { theme } from "$lib/stores/theme.js";

    function toggleTheme() {
        theme.setTheme($theme === "light" ? "dark" : "light");
    }

    function toggleLanguage() {
        language.setLang($language === "en" ? "he" : "en");
    }
</script>

<div class="absolute top-4 right-4 flex items-center gap-4" dir="ltr">
    <button
        on:click={toggleLanguage}
        class="text-sm font-bold text-ctp-subtext0 transform transition-transform duration-200 hover:scale-110 active:scale-95"
    >
        {$language === "en" ? "HE" : "EN"}
    </button>
    <button
        on:click={toggleTheme}
        class="text-ctp-subtext0 text-xl transform transition-transform duration-200 hover:scale-110 active:scale-95"
    >
        {#if $theme === "light"}
            <span>&#9790;</span> <!-- Moon -->
        {:else}
            <span>&#9728;</span> <!-- Sun -->
        {/if}
    </button>
</div>
