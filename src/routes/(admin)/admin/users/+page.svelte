<script>

    import {drawerStore, modalStore, Paginator, toastStore} from "@skeletonlabs/skeleton";
    import {editUser} from "$lib/store.js";

    export let data;
    export let form;

    let page = {
        offset: 5,
        limit: 5,
        size: data.users.length,
        amounts: [5, 8, 10, 12, 16, 20]
    }

    $: start = page.offset * page.limit;
    $: end = start + page.limit;

    $: paginatedSource = data.users.slice(
        page.offset * page.limit,             // start
        page.offset * page.limit + page.limit // end
    );

    const viewUser = (user) => {
        $editUser = user;
        modalStore.trigger({
            type: "component",
            component: "viewUserModal",
        })
    }

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container mt-3">
            <div class="flex justify-between">
                <h3 class="pl-5 pt-5">Users</h3>
            </div>

            <div class="table-container py-4">
                <!-- Native Table Element -->
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as user, i (user._id, i)}
                        <tr on:click={() => viewUser(user)}>
                            <form id="{user._id}" method="post">
                                <input type="hidden" name="id" value="{user._id}">
                            </form>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{(user.roleId === 1) ? "User" : (user.roleId === 2) ? "Employee" : (user.roleId === 3) ? "Admin" : user.roleId }</td>
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