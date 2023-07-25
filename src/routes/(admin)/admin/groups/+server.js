import {Group} from "$lib/server/models/Group.js";
import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";


export const GET = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)

    return json(await Group.find({}).sort({timeStamp: 1}));
}