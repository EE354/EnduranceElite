import {fail, redirect} from "@sveltejs/kit";
import {emailSchema, passwordSchema} from "$lib/server/zodSchemas.js";
import {auth} from "$lib/server/lucia.js";


export const load = async ({locals}) => {
    const {session} = await locals.auth.validateUser();
    if (session?.sessionId) throw redirect(302, "/");
    return {};
}

export const actions = {
    login: async ({request, locals}) => {
        try {
            //Get form data
            const form = await request.formData();
            const email = form.get("email");
            const password = form.get("password");

            //Zod validation
            emailSchema.parse(email);
            passwordSchema.parse(password);


            //Get userKey
            const key = await auth.useKey("email", email, password);


            //Login user / create session
            const session = await auth.createSession(key.userId);
            locals.auth.setSession(session);
        } catch (e) {
            console.log(e)
            return fail(200);
        }
        //If successful, redirect to home page
        throw redirect(302, "/");
    }
}