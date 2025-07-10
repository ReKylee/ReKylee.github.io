<script>
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Education from '$lib/components/Education.svelte';
</script>

<Hero />

<section id="about" class="py-8">
    <About />
</section>
<div class="my-8 border-t border-ctp-surface1"></div>
<section id="skills" class="py-8">
    <Skills />
</section>
<div class="my-8 border-t border-ctp-surface1"></div>
<section id="experience" class="py-8">
    <Experience />
</section>
<div class="my-8 border-t border-ctp-surface1"></div>
<section id="projects" class="py-8">
    <Projects />
</section>
<div class="my-8 border-t border-ctp-surface1"></div>
<section id="education" class="py-8">
    <Education />
</section>
