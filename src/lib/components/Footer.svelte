<script>
    import { t } from '$lib/stores/language.js';
</script>

<footer class="bg-slate-900 dark:bg-ctp-crust text-slate-400 dark:text-ctp-subtext0 py-12">
    <div class="container mx-auto px-4 text-center">
        <h3 class="text-2xl font-bold text-white dark:text-ctp-text mb-4">{$t('footer.title')}</h3>
        <p class="mb-2">{$t('footer.subtitle')}</p>
        <a href="mailto:ID05490@GMAIL.COM" class="text-lg font-semibold text-emerald-400 dark:text-ctp-green hover:text-emerald-300 dark:hover:text-ctp-yellow transition-colors">ID05490@GMAIL.COM</a>
        <p class="text-xs mt-8 text-slate-500">{@html $t('footer.copy')}</p>
    </div>
</footer>
