<script>
    import { language } from "$lib/stores/language.js";
    function toggleLanguage() {
        language.setLang($language === "en" ? "he" : "en");
    }
</script>

<div class="flex items-center gap-4" dir="ltr">
    <button
        on:click={toggleLanguage}
        class="text-sm font-bold text-ctp-subtext0 transform transition-transform duration-200 hover:scale-110 active:scale-95"
    >
        {$language === "en" ? "HE" : "EN"}
    </button>
</div>
