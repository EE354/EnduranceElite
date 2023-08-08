<script>
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
    let employeeInput = "";
    const popupSelect = (event) => {
        const employee = event.detail.meta.employee;
        employeeInput = employee.name.first + ' ' + employee.name.last;
    }
    let popupSettings = {
        event: 'focus-click',
        target: 'popupAutocomplete',
        placement: 'bottom',
    };
</script>

<main class="grid place-items-center">
    <form method="POST" action="?/create" use:enhance={() => {
        return async ({update}) => {
            await update();
            drawerStore.close();
        }
    }} class="w-10/12">
        <h3 class="p-5">Add New Schedule</h3>
        <hr class="!border-surface dark:!border-surface-50 mb-4">

        <label class="my-4">

            <h5>Start Date</h5>
            <input type="datetime-local" name="start" class="input input-bordered my-2" >

            <h5>End Date</h5>
            <input type="datetime-local" name="end" class="input input-bordered" >
        </label>

        <label class="my-4">
            <h5>Employee Name</h5>
            <input
                    class="input autocomplete"
                    type="search"
                    name="employee"
                    bind:value={employeeInput}
                    placeholder=""
                    use:popup={popupSettings}
            />
            <div data-popup="popupAutocomplete" class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
                <Autocomplete
                        bind:input={employeeInput}
                        options={getEmployeeOptions($page.data.employees)}
                        on:selection={popupSelect}
                />
            </div>
        </label>

        <label class="my-4">
            <h5>Description</h5>
            <textarea class="textarea" rows="4" name="description" placeholder="Schedule description" />
        </label>

        <button class="btn variant-filled-primary ">Add Schedule</button>
        <input class="btn variant-filled-error" type="reset" value="Clear">
    </form>
</main>
