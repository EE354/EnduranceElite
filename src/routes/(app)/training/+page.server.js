import {protectRoute} from "$lib/utils.js";
import {Training} from "$lib/server/models/Training.js";
import {fail} from "@sveltejs/kit";
import {nameSchema, questionSchema, stringSchema, urlSchema} from "$lib/server/zodSchemas.js";


export const load = async ({ locals, url }) => {
    const { session, user } = await locals.auth.validateUser();
    protectRoute(url, user, session, 2)
}