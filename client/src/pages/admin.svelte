<script>
    import Group from "../components/Group.svelte";
    import Button from "../components/Button.svelte";

    function handleClick() {
        // Prompt

    }
</script>

<div id="logobox">
    <!-- Box containing Logo -->
    <img alt="Endurance Elite Logo" src="../../public/Images/Logos/EE Logo.png">
</div>
<div id="titlebox">
    <!-- Box containing Header Title -->
    <h1>Administrator</h1>
</div>
<div id="Menu">
    <!-- Box containing Left Menu -->
    <div id="Contents">
        <!-- Box containing The Menu Contents -->
        <div id="Groups">
            <!-- Groups grouped -->
            <Group number={1} />
            <Group number={2} />
            <Group number={3} />
        </div>
        <div>
            <!-- Add Group Button -->
            <button type="button" class="btn btn-primary" on:click={handleClick()}>Add</button>
        </div>
    </div>
</div>

<div id="Prompt">
    <!-- Box containing The Logo -->
    <h2>Prompt</h2>
</div>

<style>

    #logobox {
        /* Logo Box */

        /* Positioning */
        position: absolute;
        left: 0px;
        top: 0px;

        /* Dimensions */
        width: 279px;
        height: 160px;

        /* Dashboard/Slight Darker Gray */
        background: #CFCFCF;
    }

    #titlebox {
        /* Title Box */

        /* Positioning */
        position: absolute;
        left: 279px;
        top: 0px;

        /* Dimensions */
        width: 1161px;
        height: 108px;

        /* Properties */
        padding-top: 2.5%;
        padding-left: 2%;

        /* Dashboard/Light Gray */
        background: #E3E7EA;
    }
    #Menu {
        /* Menu Box */

        /* Positioning */
        position: absolute;
        left: 0px;
        top: 160px;

        /* Dimensions */
        width: 279px;
        height: 871px;

        /* Dashboard/Light Gray */
        background: #e3e7ea;
    }

    #Contents {
        /* Menu Contents */

        /* Auto layout */

        /* Positioning */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 7px;

        position: absolute;
        left: 93px;
        top: 271px;
        flex: auto;

        /* Dimensions */
        width: 97px;
        height: 228px;
        
    }

    #Prompt {
        /* Prompt Box */

        /* Dimensions */
        width: 50%;
        height: 50%;

        /* TEMPORARY */
        background-color: aqua;
    }

    .btn-primary {
        /* Default State */
        background-color: #1D7C83;
    }



</style>