<script>
    import { t } from '$lib/stores/language.js';
</script>

<section id="hero" class="text-center py-20 md:py-32">
    <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-ctp-text leading-tight mb-4">{@html $t('hero.title')}</h1>
    <p class="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-ctp-subtext1 mb-8">{$t('hero.subtitle')}</p>
    <div class="flex justify-center gap-4">
        <a href="#projects" class="bg-slate-900 dark:bg-ctp-green text-white dark:text-ctp-base px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-ctp-yellow transition-transform hover:scale-105">{$t('hero.view_work')}</a>
        <a href="#skills" class="bg-white dark:bg-ctp-surface0 text-slate-900 dark:text-ctp-text px-8 py-3 rounded-lg font-semibold border border-slate-200 dark:border-ctp-surface1 hover:bg-slate-100 dark:hover:bg-ctp-surface1 transition-transform hover:scale-105">{$t('hero.see_skills')}</a>
    </div>
</section>
