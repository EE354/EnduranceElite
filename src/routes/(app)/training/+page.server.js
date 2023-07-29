import {User} from "$lib/server/models/User.js";
import {Training} from "$lib/server/models/Training.js";
import {protectRoute} from "$lib/utils.js";


export const load = async ({locals, url}) => {
    const {session, user} = await locals.auth.validateUser();
    protectRoute(url, user, session, 2)

    const dbUser = await User.findById(user.userId).populate("training")
    
    if (!dbUser) {
        return {
            status: 404,
            message: "User not found",
            error: true
        }
    }


    return {
        registeredTraining: dbUser.training || [],
    }
}