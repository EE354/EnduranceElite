import {protectRoute} from "$lib/utils.js";
import {fail, json} from "@sveltejs/kit";
import {Training} from "$lib/server/models/Training.js";
import {User} from "$lib/server/models/User.js";


export const GET = async ({url, locals, params}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)


    return json({
        training: await Training.findById(params.videoId),
        employees: await User.find({roleId: {$gte: 2}}),
        enrolledEmployees: await User.find({roleId: {$gte: 2}, training: {$in: [params.videoId]}})
    });
}

