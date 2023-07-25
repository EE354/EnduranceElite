import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";
import {Schedule} from "$lib/server/models/Schedule.js";

export const GET = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)

    return json(await Schedule.find({}));
}