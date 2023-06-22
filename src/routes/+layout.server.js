import {redirect} from "@sveltejs/kit";


export const load = async ({locals}) => {
    const {session, user} = await locals.auth.validateUser();
    return {
        status: 200,
        user: user,
        session: session
    }
}