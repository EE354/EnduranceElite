<script>

    import {drawerStore, Paginator, toastStore} from "@skeletonlabs/skeleton";

    import {editEvent} from "$lib/store.js";

    export let data;
    export let form;

    let page = {
        offset: 0,
        limit: 5,
        size: data.events.length,
        amounts: [5, 8, 10, 12, 16, 20]
    }

    $: start = page.offset * page.limit;
    $: end = start + page.limit;

    $: paginatedSource = data.events.slice(
        page.offset * page.limit,             // start
        page.offset * page.limit + page.limit // end
    );

    const AddNewEvent = () => {
        drawerStore.open({
            id: "AddEventDrawer",
            position: "right",
            width: "w-6/12",
        });
    }

    const startEdit = (event) => {
        $editEvent = event;
        console.log($editEvent)
        drawerStore.open({
            id: "EditEventDrawer",
            position: "right",
            width: "w-6/12",
        });
    }

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container mt-3">
            <div class="flex justify-between">
                <h3 class="pl-5 pt-5">Events</h3>

                <button on:click={AddNewEvent} class="btn variant-filled-primary">Add Event</button>

            </div>

            <div class="table-container p-4">
                <!-- Native Table Element -->
                <table class="table table-hover overflow-auto">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Description</th>
                        <th>location</th>
                        <th></th>
                        <th class="w-6"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as event, i (event._id, i)}
                        <tr>
                            <form id="{event._id}" method="post">
                                <input type="hidden" name="id" value="{event._id}">
                            </form>
                            <td>{i + start + 1}</td>
                            <td>{new Date(event.timeStamp.start).toString()}</td>
                            <td>{new Date(event.timeStamp.end).toString()}</td>
                            <td>{event.name}</td>
                            <td>{event.group}</td>
                            <td>{event.description}</td>
                            <td>{event.location}</td>

                            <td class="table-cell-fit"><button on:click={() => {startEdit(event)}} ><span class="material-symbols-outlined">edit</span></button></td>
                            <td><button form="{event._id}" formaction="?/delete"><span class="material-symbols-outlined">delete</span></button></td>

                        </tr>
                    {/each}
                    </tbody>

                </table>
            </div>

            <Paginator
                class="mt-4"
                bind:settings={page}
                showFirstLastButtons="{true}"
                showPreviousNextButtons="{true}"
             />

        </div>
    </div>
</main>