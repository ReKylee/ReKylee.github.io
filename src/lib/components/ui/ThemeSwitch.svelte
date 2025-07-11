<script>
    import { theme } from "$lib/stores/theme.js";

    function toggleTheme() {
        theme.setTheme($theme === "light" ? "dark" : "light");
    }
</script>

<div dir="ltr">
    <button on:click={toggleTheme} aria-label="Toggle theme">
        <div
            class="relative mx-auto h-[var(--toggleHeight)] w-[var(--toggleWidth)] rounded-[var(--toggleHeight)] transition-all duration-500 ease-in-out"
            class:bg-ctp-peach={$theme === "light"}
            class:bg-ctp-surface0={$theme !== "light"}
            style="--toggleHeight: 16em; --toggleWidth: 30em; --toggleBtnRadius: 10em; font-size: 15%;"
        >
            <div
                class="absolute block rounded-full transition-all duration-400 ease-in-out"
                class:top-[4.5em]={$theme === "light"}
                class:left-[18em]={$theme === "light"}
                class:rotate-0={$theme === "light"}
                class:w-[7em]={$theme === "light"}
                class:h-[7em]={$theme === "light"}
                class:bg-ctp-text={$theme === "light"}
                class:shadow-[3em_3em_0_5em_#fff_inset,0_-5em_0_-2.7em_#fff,3.5em_-3.5em_0_-3em_#fff,5em_0_0_-2.7em_#fff,3.5em_3.5em_0_-3em_#fff,0_5em_0_-2.7em_#fff,-3.5em_3.5em_0_-3em_#fff,-5em_0_0_-2.7em_#fff,-3.5em_-3.5em_0_-3em_#fff]={$theme ===
                    "light"}
                class:top-[3em]={$theme !== "light"}
                class:left-[3em]={$theme !== "light"}
                class:-rotate-75={$theme !== "light"}
                class:w-[var(--toggleBtnRadius)]={$theme !== "light"}
                class:h-[var(--toggleBtnRadius)]={$theme !== "light"}
                class:bg-ctp-surface0={$theme !== "light"}
                class:shadow-[3em_2.5em_0_0em_#f9e2af_inset,rgba(249,226,175,0.1)_0em_-7em_0_-4.5em,rgba(249,226,175,0.1)_3em_7em_0_-4.5em,rgba(249,226,175,0.1)_2em_13em_0_-4em,rgba(249,226,175,0.1)_6em_2em_0_-4.1em,rgba(249,226,175,0.1)_8em_8em_0_-4.5em,rgba(249,226,175,0.1)_6em_13em_0_-4.5em,rgba(249,226,175,0.1)_-4em_7em_0_-4.5em,rgba(249,226,175,0.1)_-1em_10em_0_-4.5em]={$theme !==
                    "light"}
            ></div>
        </div>
    </button>
</div>
