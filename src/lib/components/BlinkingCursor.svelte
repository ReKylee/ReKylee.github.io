<div class="blinking-cursor h-7 w-2 bg-ctp-green"></div>

<style>
    .blinking-cursor {
        animation: blink 1s step-end infinite;
    }
    @keyframes blink {
        from,
        to {
            background-color: transparent;
        }
        50% {
            background-color: #a6e3a1; /* ctp-green */
        }
    }
</style>
