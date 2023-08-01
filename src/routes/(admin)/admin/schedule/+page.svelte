<script>

    import {drawerStore, Paginator, toastStore} from "@skeletonlabs/skeleton";
	import { editSchedule } from "../../../../lib/store.js";

    export let data;
    export let form;

    let page = {
        offset: 0,
        limit: 5,
        size: data.schedules.length,
        amounts: [5, 8, 10, 12, 16, 20]
    }

    $: start = page.offset * page.limit;
    $: end = start + page.limit;

    $: paginatedSource = data.schedules.slice(
        page.offset * page.limit,             // start
        page.offset * page.limit + page.limit // end
    );

    const AddNewSchedule = () => {
        drawerStore.open({
            id: "AddScheduleDrawer",
            position: "right",
            width: "w-6/12",
        });
    }

    const EditSchedule = (schedule) => {
        $editSchedule = schedule;
        drawerStore.open({
            id: "EditScheduleDrawer",
            position: "right",
            width: "w-6/12",
        });
    }

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container mt-3">
            <div class="flex justify-between">
                <h3 class="pl-5 pt-5">Schedules</h3>

                <button on:click={AddNewSchedule} class="btn variant-filled-primary">Add Schedule</button>

            </div>

            <div class="table-container p-4">
                <!-- Native Table Element -->
                <table class="table table-hover overflow-auto">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Employee</th>
                        <th>Description</th>
                        <th></th>
                        <th class="w-6"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each paginatedSource as schedule, i (schedule._id, i)}
                        <tr>
                            <form id="{schedule._id}" method="post">
                                <input type="hidden" name="id" value="{schedule._id}">
                            </form>
                            <td>{i + start + 1}</td>
                            <td>{new Date(schedule.timeStamp.start).toString()}</td>
                            <td>{new Date(schedule.timeStamp.start).toString()}</td>
                            <td>{schedule.employee}</td>
                            <td>{schedule.description}</td>

                            <td class="table-cell-fit"><button on:click={() => {EditSchedule(schedule)}}><span class="material-symbols-outlined">edit</span></button></td>
                            <td><button form="{schedule._id}" formaction="?/delete"><span class="material-symbols-outlined">delete</span></button></td>

                        </tr>
                    {/each}
                    </tbody>

                </table>
            </div>
            <Paginator
                        class="mt-4"
                        bind:settings={page}
                        showFirstLastButtons="{true}"
                        showPreviousNextButtons="{true}"
                />
        </div>
    </div>
</main>