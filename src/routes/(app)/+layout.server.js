import {redirect} from "@sveltejs/kit";


export const load = async ({locals, url}) => {
    const {session, user} = await locals.auth.validateUser();

    return {
        status: 200,
        session: session,
        role: user?.role || 0,
    }
}