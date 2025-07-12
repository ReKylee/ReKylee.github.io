<script>
    import { animateOnScroll } from "$lib/actions/animateOnScroll.js";
    export let id;
    export let title;
</script>

<section {id} use:animateOnScroll class="section-animate">
    <h2
        class="mb-8 text-3xl font-bold after:block after:h-1 after:w-16 after:bg-ctp-green after:content-['']">
        {title}
    </h2>
    <slot />
</section>
