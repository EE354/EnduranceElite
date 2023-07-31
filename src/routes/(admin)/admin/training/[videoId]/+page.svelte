<script>
    import {onMount} from "svelte";
    import { enhance } from "$app/forms";
    import { editTraining } from "$lib/store.js";
    import {modalStore} from "@skeletonlabs/skeleton";

    export let data;
    let training
    $: training = data.training;

    let editing = false;

    const startEdit = () => {
        if (!editing) {
            $editTraining.title = training.title;
            $editTraining.description = training.description;
            $editTraining.video = training.video;
            $editTraining.tests = training.tests;
            $editTraining.tests.forEach(test => test.noAnswers = test.possibleAnswers.length)
            $editTraining.noQuestions = $editTraining.tests.length
        }
        editing = !editing;
    }

    const showEnrolled = () => {
        modalStore.trigger({
            type: "component",
            component: "enrolledEmployees",
        })
    }

</script>

<main>
    <form method="POST" action="?/delete" id="delete" use:enhance={() => {
            return async ({ update }) => {
            await update();
            $editTraining = [];
        };
    }}></form>
    <div class="flex flex-col mt-12 place-items-center">
        <div class="card p-4 w-5/6">
            {#if !editing}
            <a class="btn variant-filled-surface mb-2" href="/admin/training">Back</a>
            <button on:click={startEdit}><span class="material-symbols-outlined">settings</span></button>
                <iframe width="560" height="315" src="{training?.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h1>{training?.title}</h1>
                <p>{training?.description}</p>
                <hr class="my-2"/>
                {#each training?.tests as test}
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
                <button on:click={startEdit}><span class="material-symbols-outlined">cancel</span></button>
                <button form="edit"><span class="material-symbols-outlined">check</span></button>
                <button form="delete"><span class="material-symbols-outlined">delete</span></button>
                <form method="POST" id="edit" action="?/edit" use:enhance={({formData}) => {
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
                        <input class="input" type="text" name="url" bind:value={$editTraining.video} placeholder="Youtube URL link">
                    </label>
                    <label class="my-1">
                        <h4>Training Video Name</h4>
                        <input class="input" type="text" name="name" bind:value={$editTraining.title} placeholder="Name / Title">
                    </label>
                    <label class="my-1">
                        <h4>Training Video Description</h4>
                        <textarea class="textarea" type="text" name="description" bind:value={$editTraining.description} placeholder="Description"></textarea>
                    </label>
                    <button class="btn variant-filled-primary mb-2" on:click|preventDefault={showEnrolled} >Enrolled Employees</button>
                    <hr/>
                    <h3>Questions</h3>
                    {#each $editTraining.tests as test, i}
                        <div class="card p-2 my-2">
                            <label class="my-1">
                                <h4>Question</h4>
                                <input class="input" type="text" name="question-{i}" bind:value={test.question} placeholder="Question">
                            </label>
                            <label class="my-1">
                                <h4>Possible Answers</h4>
                                {#each test.possibleAnswers as answer, j}
                                    <div class="flex-row flex py-1">
                                        <div class="grid h-full w-4 pt-4 place-items-center">
                                        <input type="radio" class="input" id="{answer+j}" checked={j === test.correctAnswer} bind:group={test.correctAnswer} name="{test.question}" value={j}>
                                        </div>
                                        <div class="grid h-full pl-1 w-full place-items-center">
                                            <input type="text" class="input" bind:value={answer}>
                                        </div>
                                    </div>
                                {/each}
                            </label>
                        </div>
                    {/each}
                </form>
            {/if}
        </div>
    </div>
</main>