import {Training} from "$lib/server/models/Training.js";
import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";


export const GET = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)

    return json(await Training.find({}).sort({timeStamp: 1}));
}