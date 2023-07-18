<script>

    import {drawerStore, Paginator, toastStore} from "@skeletonlabs/skeleton";

    import AddEventDrawer from "./AddEventDrawer.svelte";
    import EditEventDrawer from "./EditEventDrawer.svelte";

    const errorToast = {
        message: "There was an error signing up",
        background: "variant-filled-error",
    }

    const successToast = {
        message: "Event created",
        background: "variant-filled-success",
    }

    export let data;
    export let form;

    $: if (form?.error?.message) {
        errorToast.message = form.message
        toastStore.trigger(errorToast)
    }
    $: if (form?.message) {
        errorToast.message = form.message
        toastStore.trigger(errorToast)
    }

    let page = {
        offset: 0,
        limit: data.events.length,
        total: data.events.length,
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

    const EditEvent = () => {
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
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>location</th>
                        <th></th>
                        <th class="w-6"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as event, i (event._id, i)}
                        <tr>
                            <!--TODO: fix id not being the first event-->
                            <form id="{event._id}" method="post">
                                <input type="hidden" name="id" value="{event._id}">
                            </form>
                            <td>{i + start + 1}</td>
                            <td>{new Date(event.timeStamp.start).toString()}</td>
                            <td>{new Date(event.timeStamp.start).toString()}</td>
                            <td>{event.name}</td>
                            <td>{event.description}</td>
                            <td>{event.location}</td>
                            <td class="table-cell-fit"><button on:click={EditEvent}><span class="material-symbols-outlined">edit</span></button></td>
                            <td><button form="{event._id}" formaction="?/delete"><span class="material-symbols-outlined">delete</span></button></td>

                        </tr>
                    {/each}
                    </tbody>

                </table>
                <Paginator
                        class="mt-4"
                        bind:settings={page}
                        showFirstLastButtons="{true}"
                        showPreviousNextButtons="{true}"
                />
            </div>



        </div>
    </div>
</main>