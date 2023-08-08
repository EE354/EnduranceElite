<script>
    import DateInput from "./DateInput.svelte";
    import {editSchedule} from "../store.js";
    import {enhance} from "$app/forms";
    import {drawerStore, Autocomplete, popup} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";

    const getEmployeeOptions = (employees) => {
        return employees.map(employee => {
            return {
                label: employee.name.first + ' ' + employee.name.last,
                keyword: employee.name.first + ' ' + employee.name.last,
                value: employee._id,
                meta: {
                    employee
                }
            }
        })
    }
    const popupSelect = (event) => {
        const employee = event.detail.meta.employee;
        $editSchedule.name = employee.name.first + ' ' + employee.name.last;
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
        <input type="hidden" name="id" value="{$editSchedule.id}" hidden>

        <h3 class="p-5">Edit Schedule</h3>
        <hr class="!border-surface dark:!border-surface-50 mb-4">

        <div class="my-4">

            <h5>Start Date</h5>
            <DateInput name="start" bind:date={$editSchedule.timeStamp.start}/>

            <h5>End Date</h5>
            <DateInput name="end" bind:date={$editSchedule.timeStamp.end}/>
        </div>
        <label class="my-4">
            <h5>Employee Name</h5>
            <input
                    class="input autocomplete"
                    type="search"
                    name="employee"
                    bind:value={$editSchedule.name}
                    placeholder=""
                    use:popup={popupSettings}
            />
            <div data-popup="popupAutocomplete" class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
                <Autocomplete
                        bind:input={$editSchedule.name}
                        options={getEmployeeOptions($page.data.employees)}
                        on:selection={popupSelect}
                />
            </div>
        </label>
        <label class="my-4">
            <h5>Description</h5>
            <textarea class="textarea" rows="4" name="description" bind:value={$editSchedule.description} placeholder="Schedule description" />
        </label>

        <button class="btn variant-filled-primary ">Update Schedule</button>
        <input class="btn variant-filled-error" type="reset" value="Clear">
    </form>
</main>
