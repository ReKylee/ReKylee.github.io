<span
    class="blinking-cursor"
></span>

<style>
    .blinking-cursor {
        display: inline-block;
        width: 0.55em;
        height: 1em;
        vertical-align: -0.2em;
        animation: blink 1s step-end infinite;
        background-color: var(--color-ctp-green-300);
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
