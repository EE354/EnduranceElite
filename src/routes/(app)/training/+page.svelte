<script>
    export let data;


</script>


<main>
    <div class="grid grid-cols-3 gap-2">
        {#each data.registeredTraining as training}
            <a href="wasd"  class="card p-2">
                {training.name}

            </a>
        {/each}
    </div>
</main>