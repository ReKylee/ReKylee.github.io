<script>
    import { t } from "$lib/stores/language";
    import Section from "$lib/components/Section.svelte";
    import SkillCard from "$lib/components/SkillCard.svelte";
    import SkillIcon from "$lib/components/SkillIcon.svelte";
    import BlinkingCursor from "$lib/components/BlinkingCursor.svelte";
</script>

<Section id="skills" title={$t("skills.title")}>
    <div class="prose prose-invert max-w-none">
        <p class="lead !text-ctp-subtext0">
            {$t("skills.subtitle")}
        </p>
    </div>
    <div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        <SkillCard title={$t("skills.engines")} theme="mauve">
            <div slot="icon-left" class="controller-pile-container">
                <div class="controller-pile">
                    <img
                        src="/ryan-beck-dreamcast-controller.svg"
                        alt="Dreamcast Controller"
                        class="controller-icon invert dark:invert-0 brightness-50 dark:brightness-110 group-hover:drop-shadow-[0_0_8px_theme(colors.ctp.mauve)]"
                    />
                    <img
                        src="/ryan-beck-gamecube-controller.svg"
                        alt="Gamecube Controller"
                        class="controller-icon invert dark:invert-0 brightness-75 dark:brightness-100 group-hover:drop-shadow-[0_0_8px_theme(colors.ctp.mauve)]"
                    />
                    <img
                        src="/ryan-beck-wii-controller.svg"
                        alt="Wii Controller"
                        class="controller-icon invert dark:invert-0 brightness-90 dark:brightness-90 group-hover:drop-shadow-[0_0_8px_theme(colors.ctp.mauve)]"
                    />
                </div>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-4 p-4">
                <SkillIcon
                    lightSrc="/unity-original-wordmark-logo.svg"
                    darkSrc="/unity-original-wordmark-logo.svg"
                    alt="Unity Logo"
                />

                <SkillIcon
                    lightSrc="/godot_logo_vertical_color_light.svg"
                    darkSrc="/godot_logo_vertical_color_dark.svg"
                    alt="Godot Logo"
                    delay={300}
                />
            </div>
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
                stroke-linejoin="round"
            >
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
                stroke-linejoin="round"
            >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            <div class="relative mt-2 flex flex-col items-center gap-4 p-4">
                <div
                    class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-ctp-overlay1"
                ></div>
                <span class="skill-node c-sky z-10">Node.js</span>
                <span class="skill-node c-sky z-10">MongoDB</span>
                <span class="skill-node c-sky z-10">SQL</span>
            </div>
        </SkillCard>
    </div>
</Section>
