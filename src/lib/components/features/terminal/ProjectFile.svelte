<script lang="ts">
    import type { Project } from "$lib/data/projects";
    export let project: Project;
</script>

<div class="flex flex-col sm:grid sm:grid-cols-[1fr_max-content] sm:gap-x-4">
    <!-- Filename and permissions -->
    <p class="text-ctp-blue whitespace-nowrap overflow-hidden text-ellipsis">
        <span class="hidden sm:inline">-rwx--r--r-- </span>
        {project.title}.{project.extension}
    </p>

    <p class="text-ctp-subtext1 text-right sm:text-left">
        {project.date}
    </p>
</div>
