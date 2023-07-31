import {Training} from "$lib/server/models/Training.js";
import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";
import {User} from "$lib/server/models/User.js";


export const GET = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 2)

    const dbUser = await User.findById(user.userId).populate("training");
    console.log(dbUser.training)

    return json(await Training.find({_id: {$in: dbUser.training}}).sort({timeStamp: 1}));
}

