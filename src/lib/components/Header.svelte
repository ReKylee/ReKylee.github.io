<script>
    import { t, language } from "$lib/stores/language.js";
    import { theme } from "$lib/stores/theme.js";

    function toggleTheme() {
        theme.setTheme($theme === "light" ? "dark" : "light");
    }

    function toggleLanguage() {
        language.setLang($language === "en" ? "he" : "en");
    }
</script>

<header class="bg-ctp-base/80 sticky top-0 z-50 transition-colors duration-300 relative pt-0 h-fit overflow-hidden">
    <div class="container mx-auto px-4">
        <nav
            class="flex justify-between items-baseline transform -translate-y-8"
        >
            <a href="#hero" class="text-xl font-bold text-ctp-text"
                >{$t("name")}</a
            >
            <ul
                class="hidden md:flex items-center space-x-8 text-sm font-medium px-4"
            >
                <li>
                    <a
                        href="#about"
                        class="inline-flex flex-col items-center justify-end w-24 h-36 p-2 bg-ctp-surface0 rounded-lg shadow-md text-ctp-text hover:text-ctp-green transition-colors transform transition-all duration-200 ease-in-out hover:scale-105 active:scale-110 active:-translate-y-1 active:rotate-1 active:shadow-lg rotate-1"
                        >{$t("nav.about")}</a
                    >
                </li>
                <li>
                    <a
                        href="#skills"
                        class="inline-flex flex-col items-center justify-end w-24 h-36 p-2 bg-ctp-surface0 rounded-lg shadow-md text-ctp-text hover:text-ctp-green transition-colors transform transition-all duration-200 ease-in-out hover:scale-105 active:scale-110 active:-translate-y-1 active:rotate-1 active:shadow-lg rotate-[-1]"
                        >{$t("nav.skills")}</a
                    >
                </li>
                <li>
                    <a
                        href="#experience"
                        class="inline-flex flex-col items-center justify-end w-24 h-36 p-2 bg-ctp-surface0 rounded-lg shadow-md text-ctp-text hover:text-ctp-green transition-colors transform transition-all duration-200 ease-in-out hover:scale-105 active:scale-110 active:-translate-y-1 active:rotate-1 active:shadow-lg rotate-2"
                        >{$t("nav.experience")}</a
                    >
                </li>
                <li>
                    <a
                        href="#projects"
                        class="inline-flex flex-col items-center justify-end w-24 h-36 p-2 bg-ctp-surface0 rounded-lg shadow-md text-ctp-text hover:text-ctp-green transition-colors transform transition-all duration-200 ease-in-out hover:scale-105 active:scale-110 active:-translate-y-1 active:rotate-1 active:shadow-lg rotate-[-2]"
                        >{$t("nav.projects")}</a
                    >
                </li>
                <li>
                    <a
                        href="#education"
                        class="inline-flex flex-col items-center justify-end w-24 h-36 p-2 bg-ctp-surface0 rounded-lg shadow-md text-ctp-text hover:text-ctp-green transition-colors transform transition-all duration-200 ease-in-out hover:scale-105 active:scale-110 active:-translate-y-1 active:rotate-1 active:shadow-lg rotate-1"
                        >{$t("nav.education")}</a
                    >
                </li>
            </ul>
        </nav>
    </div>
    <div class="absolute top-[-16] right-4 flex items-center gap-4" dir="ltr">
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
</header>
