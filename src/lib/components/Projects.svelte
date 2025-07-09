<script>
    import { t } from '$lib/stores/language.js';
</script>

<section id="projects" class="py-12 md:py-24 bg-slate-100 dark:bg-ctp-crust">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-ctp-text">{$t('projects.title')}</h2>
            <p class="text-lg text-slate-500 dark:text-ctp-subtext0 mt-2">{$t('projects.subtitle')}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Project Card 1 -->
            <div class="bg-white dark:bg-ctp-mantle rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-slate-200 dark:border-ctp-surface1">
                <div class="p-8">
                    <h3 class="font-bold text-xl text-slate-900 dark:text-ctp-text mb-2">{$t('projects.proj1.title')}</h3>
                    <p class="text-slate-600 dark:text-ctp-subtext1 leading-relaxed mb-4">{$t('projects.proj1.desc')}</p>
                    <div class="flex flex-wrap gap-2">
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Leadership</span>
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Unity</span>
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Agile</span>
                    </div>
                </div>
            </div>
            <!-- Project Card 2 -->
            <div class="bg-white dark:bg-ctp-mantle rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-slate-200 dark:border-ctp-surface1">
                <div class="p-8">
                    <h3 class="font-bold text-xl text-slate-900 dark:text-ctp-text mb-2">{$t('projects.proj2.title')}</h3>
                    <p class="text-slate-600 dark:text-ctp-subtext1 leading-relaxed mb-4">{$t('projects.proj2.desc')}</p>
                     <div class="flex flex-wrap gap-2">
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">C#</span>
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Godot</span>
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Problem Solving</span>
                    </div>
                </div>
            </div>
             <!-- Project Card 3 -->
            <div class="bg-white dark:bg-ctp-mantle rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-slate-200 dark:border-ctp-surface1">
                <div class="p-8">
                    <h3 class="font-bold text-xl text-slate-900 dark:text-ctp-text mb-2">{$t('projects.proj3.title')}</h3>
                    <p class="text-slate-600 dark:text-ctp-subtext1 leading-relaxed mb-4">{$t('projects.proj3.desc')}</p>
                     <div class="flex flex-wrap gap-2">
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Python</span>
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Lua</span>
                         <span class="bg-slate-200 dark:bg-ctp-surface0 text-slate-700 dark:text-ctp-subtext1 text-xs font-medium px-2 py-1 rounded-full">Self-Directed</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
