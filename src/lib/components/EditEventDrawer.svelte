<script>
    import {enhance} from "$app/forms";
    import {editEvent} from "../store.js";
    import DateInput from "./DateInput.svelte";
    import {Autocomplete, drawerStore, popup} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";

    const getGroupOptions = (groups) => {
        return groups.map(group => {
            return {
                label: group.name,
                keyword: group.name,
                value: group._id,
                meta: {
                    group
                }
            }
        })
    }
    const popupSelect = (event) => {
        const group = event.detail.meta.group;
        $editEvent.group = group.name;
    }
    let popupSettings = {
        event: 'focus-click',
        target: 'popupAutocomplete',
        placement: 'bottom',
    };
</script>

<main class="grid place-items-center">
    <form method="POST" action="?/edit" use:enhance={() => {
        return async ({update}) => {
            await update();
            drawerStore.close();
        }
    }} class="w-10/12">
        <input type="hidden" name="id" value="{$editEvent.id}" hidden >

        <h3 class="p-5">Edit Event</h3>
        <hr class="!border-surface dark:!border-surface-50 mb-4">

        <div class="my-4">

            <h5>Start Date</h5>
            <DateInput name="start" bind:date={$editEvent.timeStamp.start}/>

            <h5>End Date</h5>
            <DateInput name="end" bind:date={$editEvent.timeStamp.end}/>
        </div>

        <label class="my-4">
            <h5>Event Name</h5>
            <input type="text" class="input input-bordered" bind:value={$editEvent.name} name="name" placeholder="Event Name">
        </label>
        <label class="my-4">
            <h5>Description</h5>
            <textarea class="textarea" rows="4" name="description" bind:value={$editEvent.description} placeholder="Event description" />
        </label>
        <label class="my-4">
            <h5>Location</h5>
            <input type="text" name="location" bind:value={$editEvent.location} class="input input-bordered" placeholder="Event Location">
        </label>

        <label class="my-4">
            <h5>Group Name</h5>
            <p class="text-gray-500 ">Leave blank for public event</p>
            <input
                    class="input autocomplete"
                    type="search"
                    name="group"
                    bind:value={$editEvent.group}
                    placeholder=""
                    use:popup={popupSettings}
            />
            <div data-popup="popupAutocomplete" class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
                <Autocomplete
                        bind:input={$editEvent.group}
                        options={getGroupOptions($page.data.groups)}
                        on:selection={popupSelect}
                />
            </div>
        </label>

        <button class="btn variant-filled-primary" type="submit">Update Event</button>
        <input class="btn variant-filled-error" type="reset" value="Clear">
    </form>
</main>
