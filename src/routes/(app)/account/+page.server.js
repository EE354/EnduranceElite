import {redirect} from "@sveltejs/kit";
import {auth} from "$lib/server/lucia.js";


export const load = async ({locals}) => {
    const {session, user} = await locals.auth.validateUser();

    if (!session.sessionId) throw redirect(302, "/");

    return {
        status: 200,
        user: user,
        session: session
    }
}

export const actions = {
    logout: async ({locals}) => {
        console.log("logout")
        const {session} = await locals.auth.validateUser();

        if (!session?.sessionId) throw redirect(302, "/login");

        await auth.invalidateSession(session.sessionId);


        throw redirect(302, "/login");
    }
}