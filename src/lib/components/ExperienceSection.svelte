<script>
    import { t } from "$lib/stores/language";
    import Section from "$lib/components/Section.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
</script>

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