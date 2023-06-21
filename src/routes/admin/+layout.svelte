<script>
    import Group from "$lib/components/Group.svelte";
</script>
<div id="logobox">
    <!-- Box containing Logo -->
    <img alt="Endurance Elite Logo" src="../../public/Images/Logos/EE Logo.png">
</div>
<div id="titlebox">
    <!-- Box containing Header Title -->
    <h1>Administrator</h1>
</div>
<slot/>


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
</style>