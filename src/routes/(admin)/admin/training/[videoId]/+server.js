import {protectRoute} from "$lib/utils.js";
import {fail, json} from "@sveltejs/kit";
import {Training} from "$lib/server/models/Training.js";


export const GET = async ({url, locals, params}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)

    const training = await (Training.findById(params.videoId))

    return json(training);
}

