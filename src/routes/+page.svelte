<script>
    import { t } from "$lib/stores/language";
    import Typewriter from "$lib/components/ui/Typewriter.svelte";
    import AboutSection from "$lib/components/features/AboutSection.svelte";
    import SkillsSection from "$lib/components/features/SkillsSection.svelte";
    import ExperienceSection from "$lib/components/features/ExperienceSection.svelte";
    import ProjectsSection from "$lib/components/features/ProjectsSection.svelte";
    import EducationSection from "$lib/components/features/EducationSection.svelte";
    import Terminal from "$lib/components/features/terminal/Terminal.svelte";
</script>

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
                >{$t("hero.view_work")}</a
            >
            <a
                href="#skills"
                class="rounded-md border border-ctp-lavender px-6 py-2 text-ctp-lavender transition-all hover:scale-105 hover:bg-ctp-lavender hover:text-ctp-base"
                >{$t("hero.see_skills")}</a
            >
        </div>
    </header>

    <AboutSection />

    <EducationSection />

    <ExperienceSection />

    <SkillsSection />

    <ProjectsSection />
    <Terminal />
</div>
