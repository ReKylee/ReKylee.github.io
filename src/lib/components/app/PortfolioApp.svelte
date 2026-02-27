<script lang="ts">
    import { onMount } from "svelte";
    import type { Project } from "$lib/types";
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import ScrollToTop from "$lib/components/layout/ScrollToTop.svelte";
    import Typewriter from "$lib/components/ui/Typewriter.svelte";
    import AboutSection from "$lib/components/features/AboutSection.svelte";
    import SkillsSection from "$lib/components/features/SkillsSection.svelte";
    import ExperienceSection from "$lib/components/features/ExperienceSection.svelte";
    import ProjectsSection from "$lib/components/features/ProjectsSection.svelte";
    import EducationSection from "$lib/components/features/EducationSection.svelte";
    import Terminal from "$lib/components/features/terminal/Terminal.svelte";
    import AccessibilityFab from "$lib/components/ui/AccessibilityFab.svelte";
    import { t, language, registerTranslations, setTranslations } from "$lib/stores/language";
    import { theme } from "$lib/stores/theme";
    import { accessibility } from "$lib/stores/accessibility";
    import type { Locale } from "$lib/i18n";

    export let locale: Locale;
    export let translations: Record<string, unknown>;
    export let translationsByLocale: Record<Locale, Record<string, unknown>>;
    export let projects: Project[];
    export let projectsByLocale: Record<Locale, Project[]>;

    setTranslations(translations);
    registerTranslations("en", translationsByLocale.en);
    registerTranslations("he", translationsByLocale.he);
    language.init(locale);

    onMount(() => {
        theme.init();
        accessibility.init();
    });
</script>

<div class="crt-wrapper">
    <div class="min-h-screen bg-ctp-crust font-sans text-ctp-text">
        <div
            id="page-top"
            class="container mx-auto max-w-5xl bg-ctp-base p-4 shadow-2xl shadow-ctp-crust">
            <Header />
            <main id="main-content" tabindex="-1" class="p-4">
                <div class="space-y-16">
                    <header class="text-center">
                        <h1 class="mb-4 text-4xl font-bold text-ctp-mauve">
                            <Typewriter text={$t("hero.title")} />
                        </h1>
                        <p class="text-lg text-ctp-subtext0">{$t("hero.subtitle")}</p>
                        <div class="mt-8 flex justify-center space-x-4">
                            <a
                                href="#projects"
                                class="rounded-md bg-ctp-mauve px-6 py-2 text-ctp-base transition-all hover:scale-105"
                                >{$t("hero.view_work")}</a>
                            <a
                                href="#skills"
                                class="rounded-md border border-ctp-lavender px-6 py-2 text-ctp-lavender transition-all hover:scale-105 hover:bg-ctp-lavender hover:text-ctp-base"
                                >{$t("hero.see_skills")}</a>
                        </div>
                    </header>

                    <AboutSection />
                    <EducationSection />
                    <ExperienceSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <Terminal projects={projectsByLocale[$language] ?? projects} />
                </div>
            </main>
            <Footer />
        </div>
    </div>
</div>
<ScrollToTop />
<AccessibilityFab />
