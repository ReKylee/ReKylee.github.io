<script>
    import { t } from '$lib/stores/language.js';
</script>

<section id="about" class="py-12 md:py-24">
    <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-ctp-text">{$t('about.title')}</h2>
        <p class="text-lg text-ctp-subtext0 mt-2">{$t('about.subtitle')}</p>
    </div>
    <div class="max-w-4xl mx-auto bg-ctp-base dark:bg-ctp-mantle p-8 md:p-12 rounded-xl shadow-lg">
        <article class="prose dark:prose-invert lg:prose-xl max-w-none">
            <p>{$t('about.text')}</p>
        </article>
    </div>
</section>
