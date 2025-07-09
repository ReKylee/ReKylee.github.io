<script>
    import { t } from '$lib/stores/language.js';
</script>

<section id="experience" class="py-12 md:py-24">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-ctp-text">{$t('experience.title')}</h2>
            <p class="text-lg text-slate-500 dark:text-ctp-subtext0 mt-2">{$t('experience.subtitle')}</p>
        </div>
        <div class="max-w-3xl mx-auto">
            <div class="relative border-l-2 border-slate-200 dark:border-ctp-surface1 ltr:pl-10 rtl:pr-10">
                <!-- Timeline Item 1 -->
                <div class="mb-12 relative">
                    <div class="absolute w-6 h-6 bg-emerald-500 dark:bg-ctp-green rounded-full border-4 border-white dark:border-ctp-mantle top-1 ltr:-left-3.5 rtl:-right-3.5"></div>
                    <p class="text-sm font-medium text-emerald-600 dark:text-ctp-green">{$t('experience.exp1.date')}</p>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-ctp-text mt-1">{$t('experience.exp1.title')}</h3>
                    <p class="text-slate-500 dark:text-ctp-subtext1 mt-2 leading-relaxed">{$t('experience.exp1.desc')}</p>
                </div>
                <!-- Timeline Item 2 -->
                <div class="mb-12 relative">
                    <div class="absolute w-6 h-6 bg-emerald-500 dark:bg-ctp-green rounded-full border-4 border-white dark:border-ctp-mantle top-1 ltr:-left-3.5 rtl:-right-3.5"></div>
                    <p class="text-sm font-medium text-emerald-600 dark:text-ctp-green">{$t('experience.exp2.date')}</p>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-ctp-text mt-1">{$t('experience.exp2.title')}</h3>
                    <p class="text-slate-500 dark:text-ctp-subtext1 mt-2 leading-relaxed">{$t('experience.exp2.desc')}</p>
                </div>
            </div>
        </div>
    </div>
</section>
