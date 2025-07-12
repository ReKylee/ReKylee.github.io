<script lang="ts">
    import DreamcastController from "$lib/icons/ryan-beck-dreamcast-controller.svg?component";
    import GamecubeController from "$lib/icons/ryan-beck-gamecube-controller.svg?component";
    import NintendoController from "$lib/icons/ryan-beck-nintendo-controller.svg?component";
</script>

<svg width="0" height="0" style="position:absolute; overflow:hidden;">
    <defs>
        <symbol id="icon-dreamcast" viewBox="0 0 24 24">
            <DreamcastController />
        </symbol>
        <symbol id="icon-gamecube" viewBox="0 0 24 24">
            <GamecubeController />
        </symbol>
        <symbol id="icon-nintendo" viewBox="0 0 100 100">
            <NintendoController />
        </symbol>

        <pattern
            id="controller-pattern"
            patternUnits="userSpaceOnUse"
            width="250"
            height="250"
            color="var(--pattern-color, currentColor)"
        >
            <use
                href="#icon-dreamcast"
                x="25"
                y="50"
                width="75"
                height="75"
                fill="currentColor"
            />
            <use
                href="#icon-gamecube"
                x="125"
                y="125"
                width="75"
                height="75"
                fill="currentColor"
            />
            <use
                href="#icon-nintendo"
                x="75"
                y="200"
                width="75"
                height="75"
                fill="currentColor"
            />
        </pattern>
    </defs>
</svg>
