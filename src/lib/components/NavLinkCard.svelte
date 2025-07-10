<script>
    export let href;
    export let text;
    export let rotation;
</script>

<a
    href={href}
    class="inline-flex flex-col items-center justify-end w-24 h-36 p-2 bg-ctp-surface0 rounded-lg shadow-md text-ctp-text hover:text-ctp-green transition-colors transform transition-all duration-200 ease-in-out hover:scale-105 active:scale-110 active:-translate-y-1 active:rotate-1 active:shadow-lg {`rotate-${rotation}`}"
>
    {text}
</a>
