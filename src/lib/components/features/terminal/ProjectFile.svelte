<script lang="ts">
    import type { Project } from "$lib/types";
export let project: Project;
export let index: number;

    $: seq = String(index + 1).padStart(2, "0");
    $: id = project.id.slice(-6).toUpperCase();
    $: channel = `AREA-${String((index % 9) + 1).padStart(2, "0")}`;
    $: stamp = project.date.toUpperCase();
</script>

<div class="flex items-center justify-between gap-3 text-left">
    <p class="min-w-0 truncate text-ctp-blue font-mono">
        <span class="text-ctp-subtext1">{channel}</span>
        <span class="text-ctp-yellow"> MSG-{id}</span>
        <span> {project.title}</span>
    </p>
    <p class="shrink-0 text-ctp-subtext1 text-xs">
        {stamp} :: {project.extension.toUpperCase()} :: {seq}
    </p>
</div>
