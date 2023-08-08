<script>
    import {enhance} from "$app/forms";
    import {editGroup} from "$lib/store";
    import DateInput from "../../routes/(admin)/admin/events/DateInput.svelte";
    import {drawerStore} from "@skeletonlabs/skeleton";
</script>

<main class="grid place-items-center">
    <form method="POST" action="?/edit" use:enhance={() => {
        return async ({update}) => {
            await update();
            drawerStore.close();
        }
    }} class="w-10/12">
        <input type="hidden" name="id" value="{$editGroup._id}" hidden >

        <h3 class="p-5">Edit Event</h3>
        <hr class="!border-surface dark:!border-surface-50 mb-4">

        <label class="my-4">
            <h5>Event Name</h5>
            <input type="text" class="input input-bordered" bind:value={$editGroup.name} name="name" placeholder="Event Name">
        </label>

        <label class="my-4">
            <h5>Description</h5>
            <textarea class="textarea" rows="4" name="description" bind:value={$editGroup.description} placeholder="Event description" />
        </label>


        <button class="btn variant-filled-primary" type="submit">Update Group</button>
        <input class="btn variant-filled-error" type="reset" value="Clear">
    </form>
</main>
