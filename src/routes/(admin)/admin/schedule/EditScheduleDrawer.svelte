<script>
    import {enhance} from "$app/forms";
</script>

<main class="grid place-items-center">
    <form method="POST" action="?/edit" use:enhance class="w-10/12">
        <h3 class="p-5">Edit Event</h3>
        <hr class="!border-surface dark:!border-surface-50 mb-4">

        <label class="my-4">

            <h5>Start Date</h5>
            <input type="datetime-local" name="start" class="input input-bordered my-2" >

            <h5>End Date</h5>
            <input type="datetime-local" name="end" class="input input-bordered" >
        </label>
        <!-- TODO: Implement this better (maybe a dropdown of employees?)-->
        <label class="my-4">
            <h5>Employee Name</h5>
            <input type="text" name="employee" class="input input-bordered" placeholder="Employee Name">
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
