<script>
    import { t, language } from "$lib/stores/language.js";
    import { theme } from "$lib/stores/theme.js";
    import { onMount } from "svelte";

    function toggleTheme() {
        theme.setTheme($theme === "light" ? "dark" : "light");
    }

    function toggleLanguage() {
        language.setLang($language === "en" ? "he" : "en");
    }
</script>

<header class="bg-ctp-base/80 sticky top-0 z-50 transition-colors duration-300">
    <div class="container mx-auto px-4">
        <nav
            class="flex justify-between items-center py-4 border-b border-ctp-surface1"
        >
            <a href="#hero" class="text-xl font-bold text-ctp-text"
                >{$t("name")}</a
            >
            <div class="flex items-center gap-4">
                <ul
                    class="hidden md:flex items-center space-x-8 text-sm font-medium"
                >
                    <li>
                        <a
                            href="#about"
                            class="text-ctp-subtext0 hover:text-ctp-green transition-colors"
                            >{$t("nav.about")}</a
                        >
                    </li>
                    <li>
                        <a
                            href="#skills"
                            class="text-ctp-subtext0 hover:text-ctp-green transition-colors"
                            >{$t("nav.skills")}</a
                        >
                    </li>
                    <li>
                        <a
                            href="#experience"
                            class="text-ctp-subtext0 hover:text-ctp-green transition-colors"
                            >{$t("nav.experience")}</a
                        >
                    </li>
                    <li>
                        <a
                            href="#projects"
                            class="text-ctp-subtext0 hover:text-ctp-green transition-colors"
                            >{$t("nav.projects")}</a
                        >
                    </li>
                    <li>
                        <a
                            href="#education"
                            class="text-ctp-subtext0 hover:text-ctp-green transition-colors"
                            >{$t("nav.education")}</a
                        >
                    </li>
                </ul>

                <div
                    class="flex items-center gap-4 border-l border-ctp-surface1 pl-4"
                >
                    <button
                        on:click={toggleLanguage}
                        class="text-sm font-bold text-ctp-subtext0"
                    >
                        {$language === "en" ? "HE" : "EN"}
                    </button>
                    <button
                        on:click={toggleTheme}
                        class="text-ctp-subtext0 text-xl"
                    >
                        {#if $theme === "light"}
                            <span>&#9790;</span> <!-- Moon -->
                        {:else}
                            <span>&#9728;</span> <!-- Sun -->
                        {/if}
                    </button>
                </div>
            </div>
        </nav>
    </div>
</header>
