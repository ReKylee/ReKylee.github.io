<script>
    import { t } from '$lib/stores/language.js';
</script>

<section id="education" class="py-12 md:py-24">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-ctp-text">{$t('education.title')}</h2>
            <p class="text-lg text-slate-500 dark:text-ctp-subtext0 mt-2">{$t('education.subtitle')}</p>
        </div>
         <div class="max-w-3xl mx-auto space-y-8">
            <div class="bg-white dark:bg-ctp-mantle p-8 rounded-xl shadow-lg">
                <p class="text-sm font-medium text-slate-500 dark:text-ctp-subtext0">{$t('education.edu1.date')}</p>
                <h3 class="text-xl font-bold text-slate-900 dark:text-ctp-text mt-1">{$t('education.edu1.title')}</h3>
                <p class="text-slate-600 dark:text-ctp-subtext1 font-medium">{$t('education.edu1.school')}</p>
                <p class="text-slate-500 dark:text-ctp-subtext1 mt-2">{$t('education.edu1.desc')}</p>
            </div>
            <div class="bg-white dark:bg-ctp-mantle p-8 rounded-xl shadow-lg">
                <p class="text-sm font-medium text-slate-500 dark:text-ctp-subtext0">{$t('education.edu2.date')}</p>
                <h3 class="text-xl font-bold text-slate-900 dark:text-ctp-text mt-1">{$t('education.edu2.title')}</h3>
                <p class="text-slate-600 dark:text-ctp-subtext1 font-medium">{$t('education.edu2.school')}</p>
                <p class="text-slate-500 dark:text-ctp-subtext1 mt-2">{$t('education.edu2.desc')}</p>
            </div>
        </div>
    </div>
</section>
