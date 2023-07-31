import {protectRoute} from "$lib/utils.js";
import {nameSchema, questionSchema, stringSchema, urlSchema} from "$lib/server/zodSchemas.js";
import {fail, redirect} from "@sveltejs/kit";
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

export const  actions = {
    default: async ({url, request, locals, params}) => {
        const {user, session} = await locals.auth.validateUser();
        protectRoute(url, user, session, 2)


        const data = await request.formData();
        const chosenAnswers = JSON.parse(data.get("chosenAnswers"));

        try {
            const training = await Training.findById(params.trainingId);
            const dbUser = await User.findById(user.userId).populate("training");
            const userTraining = dbUser.training.find(t => t._id === params.trainingId)
            userTraining.chosenAnswers = chosenAnswers;

            if (!dbUser.training.includes(params.trainingId)) {
                return fail(300, "You are not enrolled in this training")
            }

            const correctAnswers = training.tests.map(t => t.correctAnswer);

            const correct = checkAnswers(chosenAnswers, correctAnswers);

            if (correct === correctAnswers.length) {
                userTraining.completed = true;
            }
            await dbUser.save();

            return {
                status: 200,
                body: {
                    correct: correct,
                }
            }




        } catch (e) {
            return fail(300, e.message);
        }



    }
}