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
            <div class="flex justify-between p-2">
                <h3 class="pl-5 pt-5">Training</h3>
                <button on:click={AddNewTraining} class="btn variant-filled-primary">Add New Training Video</button>
            </div>
            <hr class="my-2"/>

            <div class="md:flex flex-wrap gap-2 p-4">
                {#each data.training as training}
                    <div class="card mb-4 md:mb-0 p-4">
                        <a href="/admin/training/{training._id}">
                            <img alt="Training Video" src="https://img.youtube.com/vi/{getCode(training.video)}/0.jpg" class="rounded-xl container w-[16rem]"/>
                            <hr class="m-2"/>
                            <div class="p-4">
                                <h3>{training.title}</h3>
                                <p>{training.description}</p>
                                <p>{training.tests.length} Question {((training.tests.length < 1) ? 's' : '')}</p>
                            </div>
                        </a>
                    </div>
                {/each}
            </div>



        </div>
    </div>
</main>