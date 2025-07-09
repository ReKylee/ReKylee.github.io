<script>
    import { t } from '$lib/stores/language.js';
</script>

<footer class="bg-ctp-crust text-ctp-subtext0 py-12">
    <div class="container mx-auto px-4 text-center">
        <h3 class="text-2xl font-bold text-ctp-text mb-4">{$t('footer.title')}</h3>
        <p class="mb-2">{$t('footer.subtitle')}</p>
        <a href="mailto:ID05490@GMAIL.COM" class="text-lg font-semibold text-ctp-green hover:text-ctp-yellow transition-colors">ID05490@GMAIL.COM</a>
        <p class="text-xs mt-8 text-ctp-subtext0">{@html $t('footer.copy')}</p>
    </div>
</footer>
