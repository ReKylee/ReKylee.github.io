<script lang="ts">
    import type { SkillLevel } from "$lib/types";

    export let skill: string;
    export let level: SkillLevel;

    const levelMap: Record<SkillLevel, string> = {
        proficient: "w-1/2 bg-ctp-sapphire",
        advanced: "w-3/4 bg-ctp-mauve",
        expert: "w-full bg-ctp-red",
    };
</script>

<div class="mb-2">
    <p class="text-ctp-text">{skill}</p>
    <div class="h-4 w-full rounded-full bg-ctp-surface0">
        <div class="h-full rounded-full {levelMap[level]}"></div>
    </div>
</div>
