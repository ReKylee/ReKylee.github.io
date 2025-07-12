<script>
    import BlinkingCursor from "$lib/components/ui/BlinkingCursor.svelte";
    import DecoBG from "$lib/components/ui/SVGComponentsPattern.svelte";
    import Section from "$lib/components/ui/Section.svelte";
    import SkillCard from "$lib/components/ui/SkillCard.svelte";
    import SkillIcon from "$lib/components/ui/SkillIcon.svelte";
    // For the pattern
    import DreamcastController from "$lib/icons/ryan-beck-dreamcast-controller.svg?component";
    import GamecubeController from "$lib/icons/ryan-beck-gamecube-controller.svg?component";
    import WiiContriller from "$lib/icons/ryan-beck-wii-controller.svg?component";
    import NESController from "$lib/icons/ryan-beck-nes-controller.svg?component";
    import NSFController from "$lib/icons/ryan-beck-n64-controller.svg?component";
    import { t } from "$lib/stores/language";

    const controllerIcons = [
        DreamcastController,
        GamecubeController,
        WiiContriller,
        NESController,
        NSFController,
    ];
</script>

<Section id="skills" title={$t("skills.title")}>
    <div class="prose prose-invert max-w-none">
        <p class="lead !text-ctp-subtext0">
            {$t("skills.subtitle")}
        </p>
    </div>
    <div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        <SkillCard title={$t("skills.engines")} theme="mauve">
            <DecoBG
                icons={controllerIcons}
                scale={40}
                spacing={40}
                rotation={-15}>
                <div
                    class="flex flex-wrap items-center justify-center gap-4 p-4">
                    <SkillIcon
                        lightSrc="/unity-original-wordmark-logo_light.svg"
                        darkSrc="/unity-original-wordmark-logo_dark.svg"
                        alt="Unity Logo" />

                    <SkillIcon
                        lightSrc="/godot_logo_vertical_color_light.svg"
                        darkSrc="/godot_logo_vertical_color_dark.svg"
                        alt="Godot Logo"
                        delay={300} />
                </div>
            </DecoBG>
        </SkillCard>
        <SkillCard title={$t("skills.languages")} theme="green" delay={150}>
            <svg
                slot="icon-left"
                class="h-8 w-8 text-ctp-subtext1 transition-transform group-hover:rotate-6 group-hover:text-ctp-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <BlinkingCursor slot="icon-right" />
            <div class="flex flex-wrap justify-center gap-3 p-4">
                <span class="skill-chip c-green">C#</span>
                <span class="skill-chip c-green">TypeScript</span>
                <span class="skill-chip c-green">Python</span>
                <span class="skill-chip c-green">GDScript</span>
                <span class="skill-chip c-green">C++</span>
            </div>
        </SkillCard>

        <SkillCard title={$t("skills.backend")} theme="sky" delay={300}>
            <svg
                slot="icon-left"
                class="h-8 w-8 text-ctp-subtext1 transition-transform group-hover:-translate-y-1 group-hover:text-ctp-sky"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            <div class="relative mt-2 flex flex-col items-center gap-4 p-4">
                <div
                    class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-ctp-overlay1">
                </div>
                <span class="skill-node c-sky z-10">Node.js</span>
                <span class="skill-node c-sky z-10">MongoDB</span>
                <span class="skill-node c-sky z-10">SQL</span>
            </div>
        </SkillCard>
    </div>
</Section>
