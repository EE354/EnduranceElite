<script>
    import {editUser} from "$lib/store.js";
    import {page} from "$app/stores";
    import dayjs from "dayjs";
    import {enhance} from "$app/forms";
    import {modalStore} from "@skeletonlabs/skeleton";

    let userTrainings = $page.data.trainings.filter(training => {
        return $editUser.training.some(userTrainings => {
        return training._id === userTrainings._id;
    })});
    let userGroups = $page.data.groups.filter(group => $editUser.groups.some(userGroup => userGroup  === group.id));
    let editing = false;

    console.log($page.data.trainings)
    console.log($page.data.groups)
    $: console.log($editUser)
    $: console.log(userTrainings)
    $: console.log(userGroups)

    const startEdit = () => {
        editing = !editing;
        $editUser.setRole ??= $editUser.roleId;
    }
</script>

<main class="card p-8">
    <h3 class="text-center">
        {$editUser.name.first} 
        {$editUser.name.last}
    </h3>
    <hr class="my-2"/>

    <div class="grid grid-cols-2">
        <p>Email:</p>
        <p>{$editUser.email}</p>
        <p>Role:</p>
            {#if !editing}
                <p>
                    {($editUser.roleId === 1) ? "User" : ($editUser.roleId === 2) ? "Employee" : ($editUser.roleId === 3) ? "Admin" : ""} ({$editUser.roleId})
                    {#if $page.data.user.userId !== $editUser._id}<button on:click={startEdit}>
                        <!-- (July 31, 2023) pencil from FontAwesome. https://fontawesome.com/icons/pencil?f=classic&s=solid -->
                        <i class="fa-solid fa-pencil"></i></button>{/if}
                </p>
            {:else}
                <select class="input" name="role" bind:value={$editUser.setRole}>
                    {#each [1, 2, 3] as role}
                        <option value={role} selected={$editUser.roleId === role}>{(role === 1) ? "User" : (role === 2) ? "Employee" : (role === 3) ? "Admin" : ""} ({role})</option>
                    {/each}
                </select>
            {/if}
        
        <p>Age:</p>
        <p>{Math.abs(new Date(new Date() - new Date($editUser.dateOfBirth)).getUTCFullYear() - 1970)}</p>
    </div>
    <br />

    <p>Enrolled Training:</p>
    <ul class="List-disc pl-6">
    {#each userTrainings as training}
        <p>
            {#if $editUser.training.find(t => t._id === training._id)?.completed}
                <!-- (July 31, 2023) x from FontAwesome. https://fontawesome.com/icons/x?f=classic&s=solid -->
                <i class="fa-solid fa-x"></i>
            {:else}
                <!-- (July 31, 2023) x from FontAwesome. https://fontawesome.com/icons/x?f=classic&s=solid -->
                <i class="fa-solid fa-x"></i>
            {/if}
            {training.title}
        </p>
    {:else}
        <p>No Training Found</p>
    {/each}
    </ul>
    <br />

    <p>Groups</p>
    <ul class="list-disc pl-6">
    {#each userGroups as group}
        <li><p>{group.name}</p></li>
    {:else}
        <p>No Groups Found</p>
    {/each}
    </ul>
    <br />

    {#if editing}
        <form method="POST" use:enhance={({formData}) => {
            formData.append("_id", $editUser._id);
            formData.append("role", $editUser.setRole)
            return async ({update}) => {
                await update();
                editing = false;
                modalStore.close();
            }
        }}>
            <button type="submit"><span class="material-symbols-outlined">check</span></button>
            <button on:click|preventDefault={startEdit}><span class="material-symbols-outlined">cancel</span></button>
        </form>
    {/if}
</main>