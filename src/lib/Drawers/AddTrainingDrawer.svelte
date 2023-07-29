<script>

    import {modalStore} from "@skeletonlabs/skeleton";
    import {questions} from "$lib/store.js";
    import { enhance } from "$app/forms";
    import {json} from "@sveltejs/kit";

    const trainingQuestions = [];

    const addQuestion = () => {
        modalStore.trigger({
            type: 'component',
            component: 'addQuestion',
        })
    }


</script>


<main class="p-4">
    <form method="post" action="?/new" use:enhance={({formData}) => {
        formData.append("questions", JSON.stringify($questions));
        console.log(formData.get("questions"))
        return async ({ update }) => {
            await update();
            $questions = [];
        };
    }}>
        <h1>Create Training</h1>
        <hr class="my-2"/>
        <label class="my-1">
            <h4>Training Video Name</h4>
            <input class="input" type="text" name="name" placeholder="Name / Title">
        </label>
        <label class="my-1">
            <h4>Training Video Description</h4>
            <textarea class="input" type="text" name="description" placeholder="Description"></textarea>
        </label>
        <label class="my-1">
            <h4>Training Video URL</h4>
            <p class="text-gray-500">The embedded src youtube link</p>
            <input class="input" type="text" name="url" placeholder="Youtube URL link">
        </label>
        <div>
            <h4>Training Video Questions</h4>
            <hr class="mt-2"/>
            {#each $questions as question}
                <div class="flex flex-col">
                    <div class="my-1">
                        <h4 class="text-md">Question</h4>
                        {question.question}
                    </div>
                    <div class="my-1">
                        <h4 class="text-md">Answer</h4>
                        {question.possibleAnswers.at(question.selected)}
                    </div>
                    <hr/>
                </div>
            {/each}
            <button type="button" class="{((trainingQuestions.length === 0) ? 'mt-6' : '')} btn variant-filled-tertiary" on:click={addQuestion}>Add Question</button>
        </div>
        <hr class=" my-2"/>
        <button type="submit" class="btn variant-filled-primary" name="submit">Create New Training</button>
    </form>
</main>