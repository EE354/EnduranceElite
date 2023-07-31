import {Group} from "$lib/server/models/Group.js";
import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";
import {User} from "$lib/server/models/User.js";
import {editUser} from "$lib/store.js";
import {Training} from "$lib/server/models/Training.js";


export const GET = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)

    return json({
        users: await User.find(),
        trainings : await Training.find(),
        groups: await Group.find(),
        user
    });
}