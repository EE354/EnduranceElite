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
        <h3 class="p-5">Add New Group</h3>
        <hr class="!border-surface dark:!border-surface-50 mb-4">
        

        <label class="my-4">
            <h5>Group Name</h5>
            <input type="text" class="input input-bordered" name="name" placeholder="Group Name">
        </label>
        
        <label class="my-4">
            <h5>Description</h5>
            <textarea class="textarea" rows="4" name="description" placeholder="Group description" />
        </label>

        <button class="btn variant-filled-primary ">Add Group</button>
        <input class="btn variant-filled-error" type="reset" value="Clear">
    </form>
</main>
