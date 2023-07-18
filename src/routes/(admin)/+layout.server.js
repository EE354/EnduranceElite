import {redirect} from "@sveltejs/kit";


export const load = async ({locals, url}) => {
    const {session, user} = await locals.auth.validateUser();

    console.log(user)

    
    if (user != null) {
        return {
            status: 200,
            session: session,
            role: user?.role || 0,
        }
    } else {
        throw redirect(307, '/login')
    }
    
}