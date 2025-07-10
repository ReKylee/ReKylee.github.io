<script>
    import { onMount } from "svelte";

    export let text = "";
    let displayedText = "";
    let i = 0;

    onMount(() => {
        const interval = setInterval(() => {
            if (i < text.length) {
                displayedText += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    });
</script>

<span>{displayedText}</span>
