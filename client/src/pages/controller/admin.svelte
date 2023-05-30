<script>
    import Group from "./../../components/Group.svelte";
    import Button from "./../../components/Button.svelte";

    function handleClick() {
        // Prompt

    }
</script>

<div id="logobox">
    Logo
</div>
<div id="titlebox">
    <h1>Administrator</h1>
</div>
<div id="Menu">
    <div id="Contents">
        <div id="Groups">
            <!-- TODO -->
            <Group number={1} />
            <Group number={2} />
            <Group number={3} />
        </div>
        <div>
            <button type="button" class="btn btn-primary" on:click={handleClick()}>Add</button>
        </div>
    </div>
</div>

<div id="Prompt">
    <h2>Prompt</h2>
</div>

<style>

    #logobox {
        /* Rectangle 23817 */

        position: absolute;
        width: 279px;
        height: 160px;
        left: 0px;
        top: 0px;

        /* Dashboard/Slight Darker Gray */

        background: #CFCFCF;
    }

    #titlebox {

        /* Rectangle 23818 */


        position: absolute;
        width: 1161px;
        height: 108px;
        left: 279px;
        top: 0px;

        padding-top: 2.5%;
        padding-left: 2%;

        /* Dashboard/Light Gray */

        background: #E3E7EA;
    }
    #Menu {

        position: absolute;
        width: 279px;
        height: 871px;
        left: 0px;
        top: 160px;

        /* Dashboard/Light Gray */

        background: #e3e7ea;
    }

    #Contents {

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
        flex: auto;

        

    }

    #Prompt {
        width: 50%;
        height: 50%;
        background-color: aqua;
    }

    .btn-primary {
        /* Default State */
        background-color: #1D7C83;
    }



</style>