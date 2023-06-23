<script>

    import {Paginator, toastStore} from "@skeletonlabs/skeleton";
    import {enhance} from "$app/forms";

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

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container w-2/3">
            <div>
                <h3 class="pl-5 pt-5">Events</h3>
            </div>

            <div class="table-container p-4">
                <!-- Native Table Element -->
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>location</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as event, i (event._id, i)}
                        <tr>
                            <form id="formButtons" method="post">
                                <input type="hidden" name="id" value="{event._id}">
                            </form>
                            <td>{i + start + 1}</td>
                            <td>{event.name}</td>
                            <td>{event.description}</td>
                            <td>{event.location}</td>
                            <td><button form="formButtons" formaction="?/editEvent" >Edit</button></td>
                            <td><button form="formButtons" formaction="?/delete">Delete</button></td>


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
        <div class="container w-1/3">
            <form method="POST" action="?/create" use:enhance>
                <h3 class="p-5">Add New Event</h3>
                <hr class="!border-surface dark:!border-surface-50 mb-4">

                <label class="my-4">

                    <h5>Start Date</h5>
                    <input type="datetime-local" name="start" class="input input-bordered my-2" >

                    <h5>End Date</h5>
                    <input type="datetime-local" name="end" class="input input-bordered" >
                </label>

                <label class="my-4">
                    <h5>Event Name</h5>
                    <input type="text" class="input input-bordered" name="name" placeholder="Event Name">
                </label>
                <label class="my-4">
                    <h5>Description</h5>
                    <textarea class="textarea" rows="4" name="description" placeholder="Event description" />
                </label>
                <label class="my-4">
                    <h5>Location</h5>
                    <input type="text" name="location" class="input input-bordered" placeholder="Event Name">
                </label>

                <button class="btn variant-filled-secondary ">Add Event</button>
                <input class="btn variant-filled-error" type="reset" value="clear">
            </form>
        </div>
    </div>
</main>