<script>

    import {drawerStore, Paginator, toastStore} from "@skeletonlabs/skeleton";

    import {editTraining} from "../store.js";

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

    console.log(data.events)

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

    const AddNewTraining = () => {
        drawerStore.open({
            id: "AddTrainingDrawer",
            position: "right",
            width: "w-6/12"
        });
    }

    const startTraining = (training) => {
        $editTraining = training;
        drawerStore.open({
            id: "EditTrainingDrawer",
            position: "right",
            width: "w-6/12"
        });
    }

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container mt-3">
            <div class="flex justify-between">
                <h3 class="pl-5 pt-5">Events</h3>

                <button on:click={AddNewTraining} class="btn variant-filled-primary">Add Training</button>

            </div>

            <div class="table-container p-4">
                <!-- Native Table Element -->
                <table class="table table-hover overflow-auto">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th></th>
                        <th class="w-6"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as training, i (training._id, i)}
                        <tr>
                            <form id="{training._id}" method="post">
                                <input type="hidden" name="id" value="{training._id}">
                            </form>
                            <td>{i + start + 1}</td>
                            <td>{training.name}</td>
                            <td>{training.description}</td>

                            <td class="table-cell-fit"><button on:click={() => {startTraining(training)}} ><span class="material-symbols-outlined">edit</span></button></td>
                            <td><button form="{training._id}" formaction="?/delete"><span class="material-symbols-outlined">delete</span></button></td>

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