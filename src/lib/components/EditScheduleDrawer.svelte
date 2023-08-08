<script>
    import {enhance} from "$app/forms";
    import DateInput from "../../routes/(admin)/admin/events/DateInput.svelte";
    import {editSchedule} from "../store.js";
    import {Autocomplete, drawerStore, popup} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";


    let popupSettings = {
        event: 'focus-click',
        target: 'popupAutocomplete',
        placement: 'bottom',
    };

    let employeeInput = "";
    $: employees = data.employees.map(employee => {
        return {
            label: employee.name.first + ' ' + employee.name.last,
            keyword: employee.name.first + ' ' + employee.name.last,
            value: employee._id,
            meta: {
                employee
            }
        }
    })

    const onInputChipSelect = (event) => {
        const employee = event.detail.meta.employee;
        enrolledEmployees = [...enrolledEmployees, employee];
        inputChip = '';
    }
    const removeChip = ({detail}) => {
        enrolledEmployees = enrolledEmployees.filter((employee, index) => {
            return index !== detail.chipIndex;
        });
        enrolledEmployees = [...enrolledEmployees];
    }

</script>

<main class="grid place-items-center">
    <form method="POST" action="?/edit" use:enhance={() => {
        return async ({update}) => {
            await update();
            drawerStore.close();
        }
    }} class="w-10/12">
        <input type="hidden" name="id" value="{editSchedule._id}" hidden>

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
                    name="autocomplete-search"
                    bind:value={employeeInput}
                    placeholder="Search..."
                    use:popup={popupSettings}
            />
            <div data-popup="popupAutocomplete">
                <Autocomplete
                        bind:input={employeeInput}
                        options={flavorOptions}
                        on:selection={onPopupDemoSelect}
                />
            </div>
        </label>
        <label class="my-4">
            <h5>Description</h5>
            <textarea class="textarea" rows="4" name="description" bind:value={$editSchedule.description} placeholder="Schedule description" />
        </label>

        <button class="btn variant-filled-secondary ">Update Schedule</button>
        <input class="btn variant-filled-error" type="reset" value="Clear">
    </form>
</main>
