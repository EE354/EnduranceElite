import {redirect} from "@sveltejs/kit";
import {auth} from "$lib/server/lucia.js";
import {protectRoute, loginRedirect} from "$lib/utils.js";


export const load = async ({locals, url}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 1);

    return {
        status: 200,
        user: user,
        session: session,
    }

}

export const actions = {
    logout: async ({locals, url}) => {
        const {session} = await locals.auth.validateUser();

        if (!session?.sessionId) loginRedirect(url);

        await auth.invalidateSession(session.sessionId);

        throw loginRedirect(url);
    }
}