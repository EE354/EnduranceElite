<script>
    import {editUser} from "$lib/store.js";
    import {page} from "$app/stores";
    import dayjs from "dayjs";
    import {enhance} from "$app/forms";
    import {modalStore} from "@skeletonlabs/skeleton";

    const userTrainings = $page.data.trainings.filter(training => $editUser.training.some(userTraining => userTraining.id === training.id));
    const userGroups = $page.data.groups.filter(group => $editUser.groups.some(userGroup => userGroup.id === group.id));
    let editing = false;

    const startEdit = () => {
        editing = !editing;
        $editUser.setRole ??= $editUser.roleId;
    }
</script>

<main class="card p-8">
    <h3 class="text-center">
        {$editUser.name.first} {$editUser.name.last}
        <button></button>
    </h3>
    <hr class="my-2"/>
    <p>Email:</p>
    <p>{$editUser.email}</p>
    <p>Role:</p>
    {#if !editing}
    <p>
        {($editUser.roleId === 1) ? "User" : ($editUser.roleId === 2) ? "Employee" : ($editUser.roleId === 3) ? "Admin" : ""} ({$editUser.roleId})
        {#if $page.data.user.userId !== $editUser._id}<button on:click={startEdit}><span class="material-symbols-outlined">edit</span></button>{/if}
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

    Enrolled Training:
    {#each userTrainings as training}
        <p>
            {training.title}
            {#if $editUser.training.find(t => t._id === training._id)?.completed}
                <span class="material-symbols-outlined"> done </span>
            {:else}
                <span class="material-symbols-outlined"> close </span>
            {/if}
        </p>
    {:else}
        <p>No Training Found</p>
    {/each}
    Groups
    {#each userGroups as group}
        <p>{group.name}</p>
    {:else}
        <p>No Groups Found</p>
    {/each}

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