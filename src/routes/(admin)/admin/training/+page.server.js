import {protectRoute} from "$lib/utils.js";
import {Training} from "$lib/server/models/Training.js";


export const load = async ({ locals, url }) => {
    const { session, user } = await locals.auth.validateUser();
    protectRoute(url, user, session, 3)

    return {

    }
}