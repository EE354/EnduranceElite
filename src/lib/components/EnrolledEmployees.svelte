<script>

    import {Autocomplete, InputChip} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";
    import {enhance} from "$app/forms";

    let inputChip;
    let enrolledEmployees = $page.data.enrolledEmployees

    let chips = [];
    $: chips = enrolledEmployees.map((employee) => {
        return employee.name.first + ' ' + employee.name.last;
    });

    let tempE = [];
    $: employees = $page.data.employees.map(employee => {
        return {
                label: employee.name.first + ' ' + employee.name.last,
                keyword: employee.name.first + ' ' + employee.name.last,
                value: employee._id,
                meta: {
                    employee
                }
        }
    }).filter(employee => {
        return !enrolledEmployees.some((enrolledEmployee) => enrolledEmployee._id === employee.value);
    });

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

<main class="card p-4 w-1/3">
    <InputChip bind:input={inputChip} bind:value={chips} on:remove={removeChip} name="chips" />

    <div class="card w-full max-h-48 p-4 mt-2 overflow-y-auto" tabindex="-1">
        <Autocomplete
                bind:input={inputChip}
                options={employees}
                denylist={chips}
                on:selection={onInputChipSelect}
        />
    </div>

    <button  form="enroll" ></button>
    <form method="POST" action="?/enroll" id="enroll" use:enhance={({formData}) => {
        formData.append("users", JSON.stringify(enrolledEmployees.map(employee => employee._id)));
        return async ({ update }) => {
            await update();
        };
    }}>
        <input type="submit" class="btn variant-filled-tertiary my-2" value="Update Enrollment" />
        <p class="text-sm text-gray-500">Clicking this buttton saves enrollment</p>
    </form>
</main>