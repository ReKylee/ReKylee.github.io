<script lang="ts">
    import type { Project } from "$lib/data/projects";
    export let project: Project;
</script>

<div class="grid grid-cols-[1fr_max-content] gap-4">
    <p class="text-ctp-blue whitespace-nowrap overflow-hidden text-ellipsis">
        -rwx--r--r-- {project.title}.{project.extension}
    </p>
    <p class="text-ctp-subtext1">{project.date}</p>
</div>
