import {protectRoute} from "$lib/utils.js";
import {fail, json} from "@sveltejs/kit";
import {Training} from "$lib/server/models/Training.js";
import {User} from "$lib/server/models/User.js";

const checkAnswers = (chosenAnswers, correctAnswers) => {
    if (chosenAnswers.length !== correctAnswers.length) return 0;
    let correct = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (chosenAnswers[i] !== correctAnswers[i]) correct++;
    }

    return correct;
}

export const GET = async ({url, locals, params}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 2)
    try {
        const dbUser = await User.findById(user.userId).populate("training");
        const training = await Training.findById(params.trainingId);

        if (!dbUser.training.some(training => training._id === params.trainingId)) {
            return fail(300, "You are not enrolled in this training")
        }

        let count = 0;

        const correct = checkAnswers(dbUser.training.find(t => t._id === params.trainingId).chosenAnswers, training.tests.map(t => t.correctAnswer));
        console.log(correct)

        return json({
            training: await Training.findById(params.trainingId),
            completed: dbUser.training.find(t => t._id === params.trainingId).completed,
            correct: correct,
        });
    } catch (e) {
        console.log(e)
        return fail(300, e.message);
    }
}

