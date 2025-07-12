<script>
    import { onMount } from "svelte";

    export let text = "";
    let displayedText = "";
    let i = 0;
    /** @type {number | undefined } */
    let interval;

    function startTyping() {
        displayedText = "";
        i = 0;
        clearInterval(interval);
        interval = Number(
            setInterval(() => {
                if (i < text.length) {
                    displayedText += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 50),
        );
    }

    onMount(() => {
        startTyping();
        return () => clearInterval(interval);
    });

    $: if (text) {
        startTyping();
    }
</script>

<span>{displayedText}</span>
