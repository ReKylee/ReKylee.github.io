<script>
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Education from '$lib/components/Education.svelte';
</script>

<div class="container mx-auto px-4">
    <Hero />
    <About />
    <div class="my-8 border-t border-ctp-surface1"></div>
    <Skills />
    <div class="my-8 border-t border-ctp-surface1"></div>
    <Experience />
    <div class="my-8 border-t border-ctp-surface1"></div>
    <Projects />
    <div class="my-8 border-t border-ctp-surface1"></div>
    <Education />
</div>
