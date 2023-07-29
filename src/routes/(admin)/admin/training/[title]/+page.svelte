<script>
    import {onMount} from "svelte";
    import { enhance } from "$app/forms";
    import { editTraining } from "$lib/store.js";

    export let data;
    let training
    $: training = data.training[0];
    onMount(() => {
        console.log(training)
    });

    let editing = false;

    const startEdit = () => {
        if (!editing) {
            $editTraining.title = training.title;
            $editTraining.description = training.description;
            $editTraining.video = training.video;
            $editTraining.tests = training.tests;

        }

        editing = !editing;


    }

</script>

<main>
    <div class="flex flex-col mt-12 place-items-center">
        <div class="card p-4 w-5/6">
            <a class="btn variant-filled-surface mb-2">Back</a>
            <button on:click={startEdit}><span class="material-symbols-outlined">settings</span></button>
            {#if !editing}
                <iframe width="560" height="315" src="{training.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h1>{training.title}</h1>
                <p>{training.description}</p>
                <hr class="my-2"/>
                {#each training.tests as test}
                    <div>
                        <h3>{test.question}</h3>
                        {#each test.possibleAnswers as answer, i}
                            <div class="flex-row flex">
                                <input type="radio" class="input w-4" id="{answer+i}" checked={i === test.correctAnswer} name="{test.question}" value={i} readonly>
                                <div class="grid h-full place-items-center">
                                    <label for={answer+i} class="pl-1 ">{answer}</label>
                                </div>
                            </div>
                        {/each}
                    </div>
                {/each}
            {:else}

                <form method="post" action="?/edit" use:enhance={({formData}) => {
                    formData.append("questions", JSON.stringify($editTraining.tests));
                    console.log(formData.get("questions"))
                    return async ({ update }) => {
                        await update();
                        $editTraining = [];
                    };
                }}>

                    <h1>Edit Training</h1>
                    <hr class="my-2"/>
                    <label class="my-1">
                        <h4>Training Video URL</h4>
                        <p class="text-gray-500">The embedded src youtube link</p>
                        <input class="input" type="text" name="url" placeholder="Youtube URL link">
                    </label>
                    <label class="my-1">
                        <h4>Training Video Name</h4>
                        <input class="input" type="text" name="name" placeholder="Name / Title">
                    </label>
                    <label class="my-1">
                        <h4>Training Video Description</h4>
                        <textarea class="input" type="text" name="description" placeholder="Description"></textarea>
                    </label>
                    <hr/>
                </form>
            {/if}
        </div>
    </div>
</main>