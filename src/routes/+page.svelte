<script>
    import { t } from "$lib/stores/language";
    import Section from "$lib/components/Section.svelte";
    import Typewriter from "$lib/components/Typewriter.svelte";
    import SkillBar from "$lib/components/SkillBar.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import { language } from "$lib/stores/language";
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

    <Section id="about" title={$t("about.title")}>
        <p class="text-ctp-subtext0">
            {$t("about.text")}
        </p>
    </Section>

    <Section id="skills" title={$t("skills.title")}>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
                <h3 class="mb-4 text-xl font-semibold text-ctp-rosewater">
                    {$t("skills.engines")}
                </h3>
                <SkillBar skill="Unity" level="expert" />
                <SkillBar skill="Godot" level="advanced" />
            </div>
            <div>
                <h3 class="mb-4 text-xl font-semibold text-ctp-rosewater">
                    {$t("skills.languages")}
                </h3>
                <SkillBar skill="C#" level="expert" />
                <SkillBar skill="TypeScript" level="expert" />
                <SkillBar skill="Python" level="advanced" />
                <SkillBar skill="GDScript" level="advanced" />
                <SkillBar skill="C++" level="proficient" />
            </div>
            <div>
                <h3 class="mb-4 text-xl font-semibold text-ctp-rosewater">
                    {$t("skills.backend")}
                </h3>
                <SkillBar skill="Node.js" level="expert" />
                <SkillBar skill="MongoDB" level="advanced" />
                <SkillBar skill="SQL" level="proficient" />
            </div>
        </div>
    </Section>

    <Section id="experience" title={$t("experience.title")}>
        <Timeline
            events={[
                {
                    date: $t("experience.exp1.date"),
                    title: $t("experience.exp1.title"),
                    desc: $t("experience.exp1.desc"),
                },
                {
                    date: $t("experience.exp2.date"),
                    title: $t("experience.exp2.title"),
                    desc: $t("experience.exp2.desc"),
                },
            ]}
        />
    </Section>

    <Section id="projects" title={$t("projects.title")}>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ProjectCard
                title={$t("projects.proj1.title")}
                desc={$t("projects.proj1.desc")}
            />
            <ProjectCard
                title={$t("projects.proj2.title")}
                desc={$t("projects.proj2.desc")}
            />
            <ProjectCard
                title={$t("projects.proj3.title")}
                desc={$t("projects.proj3.desc")}
            />
        </div>
    </Section>

    <Section id="education" title={$t("education.title")}>
        <Timeline
            events={[
                {
                    date: $t("education.edu1.date"),
                    title: $t("education.edu1.title"),
                    school: $t("education.edu1.school"),
                    desc: $t("education.edu1.desc"),
                },
                {
                    date: $t("education.edu2.date"),
                    title: $t("education.edu2.title"),
                    school: $t("education.edu2.school"),
                    desc: $t("education.edu2.desc"),
                },
            ]}
        />
    </Section>
</div>
