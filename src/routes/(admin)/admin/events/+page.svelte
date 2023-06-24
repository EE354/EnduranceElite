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

    const formInput = {
        name: form?.name ?? "",
        description: form?.description ?? "",
        location: form?.location ?? "",
        start: form?.timeStamp?.start ?? "",
        end: form?.timeStamp?.end ?? "",
        _id: form?._id ?? ""
    }

    const edit = async (id) => {
        try {
            const event = await fetch(`/api/event?id=${id}`);
            console.log("event", event)
            formInput.name = event.name;
            formInput.description = event.description;
            formInput.location = event.location;
            formInput.start = event.timeStamp.start;
            formInput.end = event.timeStamp.end;

        } catch (e) {
            console.log(e)
        }
    }

    $: if (form?.message && form?.error === true) {
        errorToast.message = form.message.message
        toastStore.trigger(errorToast)
    }
    $: if (form?.message && form?.error === false) {
        successToast.message = form.message.message
        toastStore.trigger(successToast)
    }

    const parseDate = (date) => {
        const d = new Date(date)
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} | ${d.getHours()}:${d.getMinutes()}`
    }

    $: source = data.events;

    let page = {
        offset: 0,
        limit: 5,
        total: source.length,
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
                        <th>Title</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Description</th>
                        <th>location</th>
                        <th></th>
                        <th class="w-6"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as event, i (event._id, i)}
                        <tr>

                            <td>{i + start + 1}</td>
                            <td>{event.name}</td>
                            <td>{parseDate(event.timeStamp.start)}</td>
                            <td>{parseDate(event.timeStamp.end)}</td>
                            <td>{event.description}</td>
                            <td>{event.location}</td>
                            <td class="table-cell-fit"><form id="formButtons" method="post"><input type="hidden" name="id" value="{event._id}"></form><button on:click={() => edit(event._id)} ><span class="material-symbols-outlined">edit</span></button></td>
                            <td><button form="formButtons" formaction="?/delete"><span class="material-symbols-outlined">delete</span></button></td>

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
                <input type="hidden" name="id" bind:value="{formInput.id}">
                <h3 class="p-5">Add New Event</h3>
                <hr class="!border-surface dark:!border-surface-50 mb-4">

                <label class="my-4">

                    <h5>Start Date</h5>
                    <input type="datetime-local" name="start" bind:value={formInput.start} class="input input-bordered my-2" required >

                    <h5>End Date</h5>
                    <input type="datetime-local" name="end" bind:value={formInput.end} class="input input-bordered" required>
                </label>

                <label class="my-4">
                    <h5>Event Name</h5>
                    <input type="text" class="input input-bordered" bind:value={formInput.name} name="name" placeholder="Event Name" required>
                </label>
                <label class="my-4">
                    <h5>Description</h5>
                    <textarea class="textarea" rows="4" name="description" bind:value={formInput.description} placeholder="Event description" />
                </label>
                <label class="my-4">
                    <h5>Location</h5>
                    <input type="text" name="location" class="input input-bordered" bind:value={formInput.location} placeholder="Event Name" required>
                </label>

                <input type="submit" class="btn variant-filled-secondary" value="Add Event">
                <input class="btn variant-filled-error" type="reset" value="clear">
            </form>
        </div>
    </div>
</main>