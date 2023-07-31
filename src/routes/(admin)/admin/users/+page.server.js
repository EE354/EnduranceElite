import {dateOfBirthSchema, eventDateSchema, nameSchema, stringSchema} from "$lib/server/zodSchemas.js";
import {Group} from "$lib/server/models/Group";
import {protectRoute} from "$lib/utils.js";
import {User} from "$lib/server/models/User.js";
import {fail} from "@sveltejs/kit";


export const load = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();
    protectRoute(url, user, session, 3)

    return {
        user : user,
    }
}

export const actions = {
    default: async ({url, request, locals}) => {
        const {session, user} = await locals.auth.validateUser();

        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const id = form.get("_id");
        const role = form.get("role");

        try {
            if (role > 3 || role < 1) throw new Error("Role must be between 1 and 3")
            if (user.userId === id) throw new Error("You cannot change your own role");

            await User.findByIdAndUpdate({_id: id}, {roleId: role})

            return {
                status: 200,
                message: "User role updated successfully",
            }
        } catch (e) {
            return {
                status: 400,
                message: "Failed to update user role"
            }
        }
    },
}