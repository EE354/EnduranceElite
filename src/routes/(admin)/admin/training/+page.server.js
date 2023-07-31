import {protectRoute} from "$lib/utils.js";
import {Training} from "$lib/server/models/Training.js";
import {fail} from "@sveltejs/kit";
import {nameSchema, questionSchema, stringSchema, urlSchema} from "$lib/server/zodSchemas.js";


export const load = async ({ locals, url }) => {
    const { session, user } = await locals.auth.validateUser();
    protectRoute(url, user, session, 3)
}

export const  actions = {
    new: async ({url, request, locals}) => {
        const {user, session} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        const data = await request.formData();
        const name = data.get("name");
        const description = data.get("description");
        const ytLink = data.get("url");
        const questions = JSON.parse(data.get("questions") || "[]");

        try {
            nameSchema.parse(name);
            stringSchema.parse(description);
            urlSchema.parse(ytLink);
            questionSchema.parse(questions);
        } catch (e) {
            return fail(300, e.errors[0].message);
        }

        try {
            const training = await Training.create({
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
            return {
                status: 300,
                message: e.message
            }

        }

    }
}