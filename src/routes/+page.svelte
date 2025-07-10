<script>
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Education from '$lib/components/Education.svelte';
    import { animateOnScroll } from '$lib/actions/animateOnScroll.js';
</script>

<Hero />

<section id="about" class="py-16 section-animate" use:animateOnScroll>
    <About />
</section>
<section id="skills" class="py-16 section-animate" use:animateOnScroll>
    <Skills />
</section>
<section id="experience" class="py-16 section-animate" use:animateOnScroll>
    <Experience />
</section>
<section id="projects" class="py-16 section-animate" use:animateOnScroll>
    <Projects />
</section>
<section id="education" class="py-16 section-animate" use:animateOnScroll>
    <Education />
</section>
