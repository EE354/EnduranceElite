import {protectRoute} from "$lib/utils.js";
import {fail, json} from "@sveltejs/kit";
import {Training} from "$lib/server/models/Training.js";
import {User} from "$lib/server/models/User.js";


export const GET = async ({url, locals, params}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 2)

    const dbUser = User.findById(user.userId).populate("training");

    if (!dbUser.training.includes(params.trainingId)) {
        return fail(300, "You are not enrolled in this training")
    }


    return json({
        training: await Training.findById(params.trainingId),
    });
}

