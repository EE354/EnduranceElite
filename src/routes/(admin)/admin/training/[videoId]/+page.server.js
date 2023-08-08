import {protectRoute} from "$lib/utils.js";
import {nameSchema, questionSchema, stringSchema, urlSchema} from "$lib/server/zodSchemas.js";
import {fail, redirect} from "@sveltejs/kit";
import {Training} from "$lib/server/models/Training.js";
import {User} from "$lib/server/models/User.js";

export const  actions = {
    edit: async ({url, request, locals, params}) => {
        //Route Protection
        const {user, session} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        //Get the data from the form
        const data = await request.formData();
        const name = data.get("name");
        const description = data.get("description");
        const ytLink = data.get("url");
        const questions = JSON.parse(data.get("questions"));

        //Validate the data
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
            //Update the training
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
            return {
                status: 200,
                message: "Training updated successfully",
            }
        } catch (e) {
            console.log(e)
            return fail(300, e.message);
        }

    },
    delete: async ({url, request, locals, params}) => {
        const {user, session} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        try {
            const training = await Training.findByIdAndDelete(params.videoId);
            return {
                status: 200,
                message: "Training deleted successfully",
            }
        } catch (e) {
            return fail(300, e.message);
        }
        throw redirect(300, "/admin/training")
    },
    enroll: async ({url, request, locals, params}) => {
        const {user, session} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        const data = await request.formData();

        try {
            await User.updateMany({training: {$in: {_id: params.videoId}}}, {
                $pull: {
                    training: params.videoId
                }
            })
            const employees = JSON.parse(data.get("users"));
            for (let i = 0; i < employees.length; i++) {
                const id = employees[i];
                await User.findByIdAndUpdate(id, {
                    $addToSet: {
                        training: {
                            _id: params.videoId,
                        }
                    }
                });
            }

            return {
                status: 200,
                message: "Users enrolled into training successfully",
            }
        } catch (e) {
            console.log(e)
            return fail(300, e.message);
        }
    }
}