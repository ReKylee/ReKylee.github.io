<script>
    import { t } from "$lib/stores/language.js";
    import ThemeSwitch from "./ThemeSwitch.svelte";

    export let quests = [
        { href: "#about", text: "nav.about" },
        { href: "#skills", text: "nav.skills" },
        { href: "#experience", text: "nav.experience" },
        { href: "#projects", text: "nav.projects" },
        { href: "#education", text: "nav.education" },
    ];

    let selectedQuest = quests[0].href;

    /**
     * @param {string} href
     */
    function selectQuest(href) {
        selectedQuest = href;
    }
</script>

<aside
    class="bg-ctp-latte border-2 border-ctp-mocha rounded-lg p-6 shadow-xl m-5 w-96 flex-shrink-0 overflow-y-auto max-h-[calc(100vh-40px)] sticky top-5 font-serif text-ctp-text dark:bg-ctp-crust dark:border-ctp-mocha dark:text-ctp-text md:w-auto md:m-2.5"
>
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-bold text-ctp-text drop-shadow-md">
            {$t("name")}
        </h1>
        <ThemeSwitch />
    </div>
    <div class="text-center mb-6 border-b border-dashed border-ctp-mocha pb-3">
        <h2 class="text-2xl font-bold text-ctp-text drop-shadow-md">
            {$t("journal.title")}
        </h2>
    </div>
    <ul class="list-none p-0 m-0">
        {#each quests as quest, i}
            <li
                class="mb-3 p-3 bg-ctp-base/30 rounded-md transition-colors hover:bg-ctp-base/50"
                class:completed={selectedQuest === quest.href}
            >
                <a
                    href={quest.href}
                    on:click={() => selectQuest(quest.href)}
                    class="flex items-center no-underline text-ctp-text text-xl"
                >
                    <span
                        class="w-5 h-5 border-2 rounded-full mr-3 bg-transparent transition-all"
                        class:border-ctp-green={selectedQuest === quest.href}
                        class:bg-ctp-green={selectedQuest === quest.href}
                        class:border-ctp-mocha={selectedQuest !== quest.href}
                    ></span>
                    <span
                        class="flex-grow"
                        class:line-through={selectedQuest === quest.href}
                        class:text-ctp-subtext0={selectedQuest === quest.href}
                        >{$t(quest.text)}</span
                    >
                </a>
            </li>
        {/each}
    </ul>
</aside>
