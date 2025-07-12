<script lang="ts">
    import DreamcastController from "$lib/icons/ryan-beck-dreamcast-controller.svg?component";
    import GamecubeController from "$lib/icons/ryan-beck-gamecube-controller.svg?component";
    import WiiController from "$lib/icons/ryan-beck-wii-controller.svg?component";
    import NesController from "$lib/icons/ryan-beck-nes-controller.svg?component";
    import NSFController from "$lib/icons/ryan-beck-n64-controller.svg?component";
</script>

<defs>
    <symbol id="icon-dreamcast" viewBox="0 0 24 24"
        ><DreamcastController /></symbol
    >
    <symbol id="icon-gamecube" viewBox="0 0 24 24"
        ><GamecubeController /></symbol
    >
    <symbol id="icon-wii" viewBox="0 0 100 100"><WiiController /></symbol>
    <symbol id="icon-nes" viewBox="0 0 100 100"><NesController /></symbol>
    <symbol id="icon-n64" viewBox="0 0 100 100"><NSFController /></symbol>

    <pattern
        id="controller-pattern"
        patternUnits="userSpaceOnUse"
        width="250"
        height="250"
    >
        <use href="#icon-dreamcast" x="25" y="50" width="75" height="75" />
        <use href="#icon-gamecube" x="125" y="125" width="75" height="75" />
        <use href="#icon-wii" x="81" y="224" width="75" height="75" />
        <use href="#icon-nes" x="84" y="214" width="75" height="75" />
        <use href="#icon-n64" x="86" y="208" width="75" height="75" />
    </pattern>
</defs>
