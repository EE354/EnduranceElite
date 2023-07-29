<script>

    import {drawerStore, Paginator, toastStore} from "@skeletonlabs/skeleton";

    import {editTraining} from "$lib/store.js";

    export let data;
    export let form;

    const AddNewTraining = () => {
        drawerStore.open({
            id: "AddTrainingDrawer",
            position: "right",
            width: "w-6/12"
        });
    }

    const startTraining = (training) => {
        $editTraining = training;
        drawerStore.open({
            id: "EditTrainingDrawer",
            position: "right",
            width: "w-6/12"
        });
    }

    const getCode = (video) => {
        const arr = video.toString().split('/');
        return arr[arr.length - 1];
    }

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container mt-3">
            <div class="flex justify-between">
                <h3 class="pl-5 pt-5">Training</h3>

                <button on:click={AddNewTraining} class="btn variant-filled-primary">Add Training</button>

            </div>
            <hr class="my-2"/>

            <div class="grid grid-cols-4 p-4">
                {#each data.training as training}
                    <a class="card p-4" href="admin/admin/training/{training.title}">
                        <div class="">
                            <img src="https://img.youtube.com/vi/{getCode(training.video)}/0.jpg" class="rounded-xl mx-auto"/>
                        </div>
                        <hr class="m-2"/>
                        <h3>{training.title}</h3>
                        <p>{training.description}</p>
                        <p>{training.tests.length} Question{((training.tests.length < 1) ? 's' : '')}</p>
                    </a>
                {/each}
            </div>



        </div>
    </div>
</main>