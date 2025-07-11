<span
    class="blinking-cursor inline-block align-middle justify-center h-current w-2 bg-ctp-green"
></span>

<style>
    .blinking-cursor {
        animation: blink 1s step-end infinite;
        height: 1em;
    }

    @keyframes blink {
        from,
        to {
            background-color: transparent;
        }
        50% {
            background-color: var(--color-ctp-green-300);
        }
    }
</style>
