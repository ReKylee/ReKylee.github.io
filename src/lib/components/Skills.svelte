<script>
    import { t } from '$lib/stores/language.js';

    const skills = {
        engines: [
            { name: 'Unity', level: '95%', label: 'expert' },
            { name: 'Godot', level: '90%', label: 'expert' },
        ],
        languages: [
            { name: 'C#', level: '95%', label: 'advanced' },
            { name: 'TypeScript', level: '85%', label: 'advanced' },
        ],
        backend: [
            { name: 'Node.js & Express', level: '80%', label: 'proficient' },
        ]
    };
</script>

<section id="skills" class="py-12 md:py-24 bg-slate-100 dark:bg-ctp-crust">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-ctp-text">{$t('skills.title')}</h2>
            <p class="text-lg text-slate-500 dark:text-ctp-subtext0 mt-2">{$t('skills.subtitle')}</p>
        </div>
        <div class="max-w-4xl mx-auto space-y-10">
            <div>
                <h3 class="font-bold text-slate-900 dark:text-ctp-text text-xl mb-4">{$t('skills.engines')}</h3>
                {#each skills.engines as skill}
                <div class="mb-4">
                    <div class="flex justify-between mb-1 text-sm font-medium text-slate-600 dark:text-ctp-subtext1">
                        <span>{skill.name}</span>
                        <span>{$t('skills.levels.' + skill.label)}</span>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-ctp-surface0 rounded-full h-4">
                        <div class="bg-emerald-500 dark:bg-ctp-green h-4 rounded-full" style="width: {skill.level}"></div>
                    </div>
                </div>
                {/each}
            </div>
            <div>
                <h3 class="font-bold text-slate-900 dark:text-ctp-text text-xl mb-4">{$t('skills.languages')}</h3>
                {#each skills.languages as skill}
                <div class="mb-4">
                     <div class="flex justify-between mb-1 text-sm font-medium text-slate-600 dark:text-ctp-subtext1">
                        <span>{skill.name}</span>
                        <span>{$t('skills.levels.' + skill.label)}</span>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-ctp-surface0 rounded-full h-4">
                        <div class="bg-emerald-500 dark:bg-ctp-green h-4 rounded-full" style="width: {skill.level}"></div>
                    </div>
                </div>
                {/each}
            </div>
            <div>
                <h3 class="font-bold text-slate-900 dark:text-ctp-text text-xl mb-4">{$t('skills.backend')}</h3>
                {#each skills.backend as skill}
                <div class="mb-4">
                     <div class="flex justify-between mb-1 text-sm font-medium text-slate-600 dark:text-ctp-subtext1">
                        <span>{skill.name}</span>
                        <span>{$t('skills.levels.' + skill.label)}</span>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-ctp-surface0 rounded-full h-4">
                        <div class="bg-emerald-500 dark:bg-ctp-green h-4 rounded-full" style="width: {skill.level}"></div>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>
