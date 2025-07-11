<script>
    export let events;
</script>

<div class="relative border-l-2 border-ctp-overlay2 pl-8">
    {#each events as event, i}
        <div class="mb-8">
            <div
                class="absolute -left-3 mt-1.5 h-5 w-5 rounded-full bg-ctp-yellow"
            ></div>
            <p class="text-sm text-ctp-subtext0">{event.date}</p>
            <h3 class="text-xl font-semibold text-ctp-lavender">
                {event.title}
            </h3>
            {#if event.school}
                <p class="text-md text-ctp-peach">{event.school}</p>
            {/if}
            <p class="mt-1 text-ctp-text">{event.desc}</p>
        </div>
    {/each}
</div>
