<script>
    import { t } from "$lib/stores/language";
    import Section from "$lib/components/Section.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
</script>

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