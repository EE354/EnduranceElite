import {protectRoute} from "$lib/utils.js";
import {nameSchema, questionSchema, stringSchema, urlSchema} from "$lib/server/zodSchemas.js";
import {fail} from "@sveltejs/kit";
import {Training} from "$lib/server/models/Training.js";

export const  actions = {
    new: async ({url, request, locals, params}) => {
        const {user, session} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        const data = await request.formData();
        const name = data.get("name");
        const description = data.get("description");
        const ytLink = data.get("url");
        const questions = JSON.parse(data.get("questions"));

        try {
            nameSchema.parse(name);
            stringSchema.parse(description);
            urlSchema.parse(ytLink);
            questionSchema.parse(questions);
        } catch (e) {
            console.log(e)
            return fail(300, e.errors[0].message);
        }

        try {
            const training = await Training.findByIdAndUpdate(params.videoId, {
                title: name,
                description: description,
                video: ytLink,
                tests: questions.map(q =>{ return {
                    question: q.question,
                    possibleAnswers: q.possibleAnswers,
                    correctAnswer: q.correctAnswer
                }})
            });
        } catch (e) {
            console.log(e)
            return fail(300, e.message);
        }

    }
}