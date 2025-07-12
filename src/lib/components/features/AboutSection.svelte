<script>
    import { t } from "$lib/stores/language";
    import Section from "$lib/components/ui/Section.svelte";
</script>

<Section id="about" title={$t("about.title")}>
    <p class="text-ctp-subtext0">
        {$t("about.text")}
    </p>
</Section>
