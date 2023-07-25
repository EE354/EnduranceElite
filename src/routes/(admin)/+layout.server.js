import {redirect} from "@sveltejs/kit";
import {protectRoute} from "$lib/utils.js";


export const load = async ({locals, url}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)
    
}