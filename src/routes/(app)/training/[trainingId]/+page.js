export const load = async ({fetch, locals, params}) => {
    const res = await fetch(`/training/${params.trainingId}`);
    let data = await res.json();
    return {
        training:  data.training,
        completed: data.completed,
        correct: data.correct,
    }
}