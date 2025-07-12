<script>
    import { t } from "$lib/stores/language";
    import Section from "$lib/components/ui/Section.svelte";
    import ProjectCard from "$lib/components/ui/ProjectCard.svelte";
</script>

<Section id="projects" title={$t("projects.title")}>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProjectCard
            title={$t("projects.proj1.title")}
            desc={$t("projects.proj1.desc")} />
        <ProjectCard
            title={$t("projects.proj2.title")}
            desc={$t("projects.proj2.desc")} />
        <ProjectCard
            title={$t("projects.proj3.title")}
            desc={$t("projects.proj3.desc")} />
    </div>
</Section>
