import {redirect} from "@sveltejs/kit";


export const load = async ({locals, url}) => {
    const {session, user} = await locals.auth.validateUser();

    const isAdmin = url.pathname.startsWith("/admin");

    return {
        status: 200,
        user: user,
        session: session,
        isAdmin: true,
        url: url.pathname
    }
}