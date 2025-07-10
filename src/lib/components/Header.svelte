<script>
    import { t } from "$lib/stores/language.js";
    import ToggleButtons from "./ToggleButtons.svelte";
    import NavLinkCard from "./NavLinkCard.svelte";
</script>

<header class="bg-ctp-base/80 sticky top-0 z-50 transition-colors duration-300 relative pt-0 h-fit overflow-hidden">
    <div class="container mx-auto px-4">
        <nav
            class="flex justify-between items-baseline transform -translate-y-8"
        >
            <a href="#hero" class="text-xl md:text-2xl font-bold text-ctp-text inline-block"
                >{$t("name")}</a
            >
            <ul
                class="hidden md:flex items-center space-x-8 text-sm font-medium px-4 py-0 mt-[-24]"
            >
                <li>
                    <NavLinkCard href="#about" text={$t("nav.about")} rotation={1} />
                </li>
                <li>
                    <NavLinkCard href="#skills" text={$t("nav.skills")} rotation={-1} />
                </li>
                <li>
                    <NavLinkCard href="#experience" text={$t("nav.experience")} rotation={2} />
                </li>
                <li>
                    <NavLinkCard href="#projects" text={$t("nav.projects")} rotation={-2} />
                </li>
                <li>
                    <NavLinkCard href="#education" text={$t("nav.education")} rotation={1} />
                </li>
            </ul>
        </nav>
    </div>
    <ToggleButtons />
</header>
