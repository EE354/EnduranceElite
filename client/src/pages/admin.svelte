<script>
    import Group from "../components/Group.svelte";
</script>

<div id="Menu">
    <div id="Groups">
        <!-- TODO -->
        <Group number={1} />
        <Group number={2} />
        <Group number={3} />
    </div>
</div>

<style>
    #Menu {

        position: absolute;
        width: 279px;
        height: 871px;
        left: 0px;
        top: 160px;

        /* Dashboard/Light Gray */

        background: #e3e7ea;
    }

    #Groups {

        /* Groups */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 7px;

        position: absolute;
        width: 97px;
        height: 228px;
        left: 93px;
        top: 271px;

        background-color:aquamarine;

    }
</style>