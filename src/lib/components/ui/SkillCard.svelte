<script lang="ts">
    export let title: string;
    export let theme: "mauve" | "green" | "sky" = "mauve";
    export let delay: number = 0;

    const borderClasses = {
        mauve: "hover:border-ctp-mauve",
        green: "hover:border-ctp-green",
        sky: "hover:border-ctp-sky",
    };
</script>

<div
    class="animate-fade-in-up group relative overflow-hidden rounded-lg border-2 border-ctp-surface1 bg-ctp-mantle p-6 shadow-xl transition-all {borderClasses[
        theme
    ]}"
    style="animation-delay: {delay}ms;">
    <div class="text-center">
        <div class="flex items-center justify-center gap-4">
            <slot name="icon-left" />
            <h3 class="text-2xl font-bold text-ctp-{theme}">
                {title}
            </h3>
            <slot name="icon-right" />
        </div>
        <div class="mt-6">
            <slot />
        </div>
    </div>
</div>
