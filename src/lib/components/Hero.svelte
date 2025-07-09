<script>
    import { t } from '$lib/stores/language.js';
</script>

<section id="hero" class="text-center py-20 md:py-32">
    <h1 class="text-4xl md:text-6xl font-black text-ctp-text leading-tight mb-4">{@html $t('hero.title')}</h1>
    <p class="max-w-3xl mx-auto text-lg md:text-xl text-ctp-subtext1 mb-8">{$t('hero.subtitle')}</p>
    <div class="flex justify-center gap-4">
        <a href="#projects" class="bg-ctp-blue text-ctp-base px-8 py-3 rounded-lg font-semibold hover:bg-ctp-mauve transition-transform hover:scale-105">{$t('hero.view_work')}</a>
        <a href="#skills" class="bg-ctp-base text-ctp-text px-8 py-3 rounded-lg font-semibold border border-ctp-surface1 hover:bg-ctp-surface0 transition-transform hover:scale-105">{$t('hero.see_skills')}</a>
    </div>
</section>
