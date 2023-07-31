<script>
    import { flip } from 'svelte/animate';
    import {editTraining} from "$lib/store.js";
    import {modalStore, toastStore} from "@skeletonlabs/skeleton";

    $editTraining
    let questionId = $editTraining.QId;
    let test = $editTraining.tests[$editTraining.currentlyEditing];

    const createQuestion = () => {
        try {
            if (name.length < 1) {
                throw new Error('Question is required');
            }
            if ($editTraining.tests[] < 2) {
                throw new Error('At least 2 options are required');
            }
            if (keyQuestions.filter(q => q.q.length < 1).length > 0) {
                throw new Error('All options are required');
            }

            let question = {
                question: name,
                correctAnswer: selected,
                possibleAnswers: keyQuestions.map(q => q.q)
            }

            $questions = [...$questions, question];
            modalStore.close();
        } catch (e) {
            toastStore.trigger({
                message: e.message,
                type: 'error'
            });
        }
    }
</script>

<main>
    <div class="card p-4">
        <div class="row">
            <div class="col-md-12" >
                <h2>Add New Question</h2>
                <label>
                    <p>Question</p>
                    <input class="input" type="text" bind:value={name} placeholder="Question">
                </label>
                <label>
                    <p>Number of Options</p>
                    <input class="input" type="number" bind:value={noOfOptions} placeholder="number of options">
                </label>
                <hr class="my-4"/>
                {#each keyQuestions as question, i (question.id)}
                    <div animate:flip={{duration:200}}>
                        <div class="flex flex-row justify-between">
                            <p>{i+1} )</p>
                            <input type="radio" group={selected} name="correctQuestion" value={i} class="input w-4">
                        </div>
                        <textarea class="textarea h-1/2 rounded-lg" type="text" bind:value={question.q} placeholder="Potential Answer"></textarea>
                        <hr class="my-4"/>
                    </div>
                {/each}
                <button class="btn variant-filled-tertiary" on:click={createQuestion} >Create Question</button>
            </div>
        </div>
    </div>
</main>