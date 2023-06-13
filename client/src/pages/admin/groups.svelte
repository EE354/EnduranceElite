<script>
    import Group from "../../components/Group.svelte";
    import axios from "axios";
    import {ready} from "@roxi/routify";


    let groups = [];

    let selectedGroup = null;

    //Code for button toggles
    let activeButton;
    $: activeButton = undefined;

    const selected = "btn-primary";
    const secondary = "btn-secondary";

    const getClass = (id, active) => {
      if (active === id)  {
          return selected;
      } else {
          return secondary;
      }
    };

    function menuClick(id) {
        activeButton = id;
        selectedGroup = groups[id];
    }

    (async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "http://localhost:3000/api/groups/"
            });
            groups = response.data;
            $ready();
        } catch (e) {
            console.log(e)
        }
    })();
</script>

<div class="grid">

</div>
<div id="Menu" >
    <!-- Box containing Left Menu -->
    <div id="Contents">
        <!-- Box containing The Menu Contents -->
        <div id="Groups">
            {#each groups as group, i (group._id)}
                <button on:click={() => {menuClick(i)}} class="btn {getClass(i, activeButton)}">{group.name}</button>
            {/each}
        </div>
        <!-- Add Group Button -->
        <button type="button" class="btn btn-primary" >Add</button>
    </div>

</div>

<style>
    .grid {

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