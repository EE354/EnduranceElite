import {dateOfBirthSchema, emailSchema, nameSchema, passwordSchema} from "$lib/server/zodSchemas";
import {auth} from "$lib/server/lucia.js";
import {fail, redirect} from "@sveltejs/kit";

export const load = async ({locals}) => {
    const {session} = await locals.auth.validateUser();
    if (session?.sessionId) throw redirect(302, "/");
    return {};
}

export const actions = {
    default: async ({request, locals}) => {
        try {
            const form = await request.formData();
            const email = form.get("email");
            const password = form.get("password");
            const confirmPassword = form.get("confirmPassword");
            const firstName = form.get("first");
            const lastName = form.get("last");
            const dateOfBirth = new Date(form.get("dob"));

            console.log(email, password, confirmPassword, firstName, lastName, dateOfBirth)


            //Zod validation
            emailSchema.parse(email);
            passwordSchema.parse(password);
            passwordSchema.parse(confirmPassword);
            nameSchema.parse(firstName);
            nameSchema.parse(lastName);
            dateOfBirthSchema.parse(dateOfBirth);

            if (password !== confirmPassword) throw new Error("Passwords do not match");


            //Create user
            const user = await auth.createUser({
                primaryKey: {
                    providerId: "email",
                    providerUserId: email,
                    password: password
                },
                attributes: {
                    email: email,
                    name: {
                        first: firstName,
                        last: lastName,
                    },
                    dateOfBirth: dateOfBirth,
                }
            });

            //Login user
            const session = await auth.createSession(user.userId);
            locals.auth.setSession(session);
        } catch (e) {
            console.log(e)
            return fail(200);
        }
        //If successful, redirect to home page
        throw redirect(302, "/");
    }
}