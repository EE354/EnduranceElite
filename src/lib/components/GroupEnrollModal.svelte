<script>

    import {Autocomplete, InputChip, modalStore} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";
    import {enhance} from "$app/forms";
    import {editGroup} from "$lib/store.js";

    let inputChip;
    let enrolledUsers = [];

    (async () => {
        const response = await fetch(`/admin/groups/${$editGroup._id}/users`);
        const data = await response.json();
        enrolledUsers = data.enrolledUsers;
    })();
    console.log(enrolledUsers)

    $: chips = enrolledUsers.map((user) => {
        return user.name.first + ' ' + user.name.last;
    });

    $: users = $page.data.users.map(user => {
        return {
                label: user.name.first + ' ' + user.name.last,
                keyword: user.name.first + ' ' + user.name.last,
                value: user._id,
                meta: {
                    user
                }
        }
    }).filter(user => {
        return !enrolledUsers.some((enrolledUser) => enrolledUser._id === user.value);
    });

    const onInputChipSelect = (event) => {
        const user = event.detail.meta.user;
        enrolledUsers = [...enrolledUsers, user];
        inputChip = '';
    }
    const removeChip = ({detail}) => {
        enrolledUsers = enrolledUsers.filter((user, index) => {
            return index !== detail.chipIndex;
        });
        enrolledUsers = [...enrolledUsers];
    }
</script>

<main class="card p-4 w-1/3">
    <h3 class="mb-1">Add users to {$editGroup.name}</h3>
    <InputChip bind:input={inputChip} bind:value={chips} on:remove={removeChip} name="chips" />

    <div class="card w-full max-h-48 p-4 mt-2 overflow-y-auto" tabindex="-1">
        <Autocomplete
                bind:input={inputChip}
                options={users}
                denylist={chips}
                on:selection={onInputChipSelect}
        />
    </div>

    <button  form="enroll" ></button>
    <form method="POST" action="?/enroll" id="enroll" use:enhance={({formData}) => {
        formData.append("users", JSON.stringify(enrolledUsers.map(user => user._id)));
        formData.append("id", $editGroup._id);
        return async ({ update }) => {
            await update();
            modalStore.close();
        };
    }}>
        <input type="submit" class="btn variant-filled-tertiary my-2" value="Update Enrollment" />
        <p class="text-sm text-gray-500">Clicking this buttton saves enrollment</p>
    </form>
</main>