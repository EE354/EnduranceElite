<script>

    export let data;
    export let form;

    const getCode = (video) => {
        const arr = video.toString().split('/');
        return arr[arr.length - 1];
    }

</script>


<main>
    <div class="container flex justify-center w-auto">

        <div class="container mt-3">
            <div class="flex justify-between">
                <h3 class="pl-5 pt-5">Your Trainings</h3>


            </div>
            <hr class="my-2"/>

            <div class="grid grid-cols-4 gap-2 p-4">
                {#each data.training as training}
                    <a class="card p-4" href="/training/{training._id}">
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
            {(data.training.length === 0) ? "No Enrolled Trainings" : ""}
        </div>
    </div>
</main>