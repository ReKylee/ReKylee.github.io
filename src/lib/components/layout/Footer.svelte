<script>
    import { t } from "$lib/stores/language";
    import CRTControl from "$lib/components/ui/CRTControl.svelte";
</script>

<footer class="mt-16 border-t-2 border-ctp-surface1 pt-8 text-center">
    <h3 class="text-2xl font-bold text-ctp-sky">{$t("footer.title")}</h3>
    <p class="mb-4 text-ctp-subtext0">{$t("footer.subtitle")}</p>
    <div class="mb-8 flex justify-center space-x-6">
        <a
            href="https://github.com/rekylee"
            target="_blank"
            class="text-ctp-text transition-colors hover:text-ctp-green"
            aria-label="GitHub">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path
                ></svg>
        </a>
        <a
            href="https://www.linkedin.com/in/rekylee/"
            target="_blank"
            class="text-ctp-text transition-colors hover:text-ctp-green"
            aria-label="LinkedIn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path
                ><rect x="2" y="9" width="4" height="12"></rect><circle
                    cx="4"
                    cy="4"
                    r="2"></circle
                ></svg>
        </a>
        <a
            href="mailto:ido5490@gmail.com"
            class="text-ctp-text transition-colors hover:text-ctp-green"
            aria-label="Email">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path
                ><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
    </div>
    <div class="mt-8 flex justify-center">
        <CRTControl />
    </div>
    <p class="text-sm text-ctp-subtext1">{@html $t("footer.copy")}</p>
</footer>
