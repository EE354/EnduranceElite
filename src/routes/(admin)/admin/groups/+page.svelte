<script>

    import {drawerStore, Paginator, toastStore} from "@skeletonlabs/skeleton";

    import {editGroup} from "$lib/store.js";

    const errorToast = {
        message: "There was an error loading the page",
        background: "variant-filled-error",
    }

    const successToast = {
        message: "Group created",
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
        limit: data.groups.length,
        total: data.groups.length,
        amounts: [5, 8, 10, 12, 16, 20]
    }

    $: start = page.offset * page.limit;
    $: end = start + page.limit;

    $: paginatedSource = data.groups.slice(
        page.offset * page.limit,             // start
        page.offset * page.limit + page.limit // end
    );

    const AddNewGroup = () => {
        drawerStore.open({
            id: "AddGroupDrawer",
            position: "right",
            width: "w-6/12",
        });
    }

    const startEdit = (group) => {
        $editGroup = group;
        drawerStore.open({
            id: "EditGroupDrawer",
            position: "right",
            width: "w-6/12",
        });
    }

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container mt-3">
            <div class="flex justify-between">
                <h3 class="pl-5 pt-5">Groups</h3>

                <button on:click={AddNewGroup} class="btn variant-filled-primary">Add Group</button>

            </div>

            <div class="table-container p-4">
                <!-- Native Table Element -->
                <table class="table table-hover overflow-auto">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Members</th>
                        <th>Description</th>
                        <th></th>
                        <th class="w-6"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as group, i (group._id, i)}
                        <tr>
                            <form id="{group._id}" method="post">
                                <input type="hidden" name="id" value="{group._id}">
                            </form>
                            <td>{i + start + 1}</td>
                            <td>{group.name}</td>
                            <td>{group.members}</td>
                            <td>{group.description}</td>

                            <td class="table-cell-fit"><button on:click={() => {startEdit(group)}} ><span class="material-symbols-outlined">edit</span></button></td>
                            <td><button form="{group._id}" formaction="?/delete"><span class="material-symbols-outlined">delete</span></button></td>

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