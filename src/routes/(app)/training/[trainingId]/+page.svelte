<script>
    import { enhance } from "$app/forms";

    export let data;
    export let form;
    let training;
    $: training = data.training;

</script>

<main>
    <form method="POST" use:enhance>
    <div class="flex flex-col mt-12 place-items-center">
        <div class="card p-4 w-5/6">
        <a class="btn variant-filled-surface mb-2" href="/admin/training">Back</a>
            <iframe width="560" height="315" src="{training?.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>{training?.title}</h1>
            <p>{training?.description}</p>
            <hr class="my-2"/>
            {#each training?.tests as test, t}
                <div>
                    <h3>{test.question}</h3>
                    {#each test.possibleAnswers as answer, i}
                        {@const id = crypto.randomUUID()}
                        <div class="flex-row flex">
                            <input type="radio" class="input w-4" group={test.question} id="{id}" name="{test.question}" value={i}>
                            <div class="grid h-full place-items-center">
                                <label for={id} class="pl-1 ">{answer}</label>
                            </div>
                        </div>
                    {/each}
                </div>
            {/each}
            <hr class="my-2"/>
            {#if !data.completed}
                {#if data.correct !== 0}
                    <p>{data.correct} correct out of {training.tests.length}</p>
                {/if}
                <input type="submit" class="btn variant-filled-surface" value="Submit">
            {:else}
                <p>Completed</p>
            {/if}
        </div>
    </div>
    </form>
</main>