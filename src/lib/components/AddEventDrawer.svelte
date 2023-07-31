<script>
    import {enhance} from "$app/forms";
    import {drawerStore} from "@skeletonlabs/skeleton";
</script>

<main class="grid place-items-center">
    <form method="POST" action="?/create" use:enhance={() => {
        return async ({update}) => {
            await update();
            drawerStore.close();
        }
    }} class="w-10/12">
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
            <input type="text" name="location" class="input input-bordered" placeholder="Event Location">
        </label>

        <button class="btn variant-filled-secondary ">Add Event</button>
        <input class="btn variant-filled-error" type="reset" value="Clear">
    </form>
</main>
