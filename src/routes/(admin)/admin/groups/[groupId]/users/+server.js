import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";
import {User} from "$lib/server/models/User.js";


export const GET = async ({url, locals, params}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)

    return json({
        enrolledUsers: await User.find({groups: params.groupId}),
    });
}