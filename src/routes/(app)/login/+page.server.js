import {fail, redirect} from "@sveltejs/kit";
import {emailSchema, passwordSchema} from "$lib/server/zodSchemas.js";
import {auth} from "$lib/server/lucia.js";
import {returnRedirect} from "$lib/utils.js";


export const load = async ({locals}) => {
    const {session} = await locals.auth.validateUser();
    if (session?.sessionId) throw redirect(302, "/");
    return {};
}

export const actions = {
    login: async ({request, locals, url}) => {
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

            return {
                status: 200,
                message: "Login successful"
            }
        } catch (e) {
            return {
                status: 300,
                message: "Invalid email or password"
            };
        }
        //If successful, redirect to home page
        returnRedirect(url);
    }
}