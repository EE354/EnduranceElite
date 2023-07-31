import {dateOfBirthSchema, eventDateSchema, nameSchema, stringSchema} from "$lib/server/zodSchemas.js";
import {Group} from "$lib/server/models/Group";
import {protectRoute} from "$lib/utils.js";
import {User} from "$lib/server/models/User.js";
import {fail} from "@sveltejs/kit";


export const load = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();
    protectRoute(url, user, session, 3)

    return {

    }
}

export const actions = {
    create: async ({url, locals, request}) => {
        const {session, user} = await locals.auth.validateUser();

        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const name = form.get("name");
        const description = form.get("description");


        try {

            nameSchema.parse(name);
            stringSchema.parse(description);

            await Group.create({
                name: name,
                description: description,
            });

            return {
                status: 200,
                message: "Group created successfully",
            }
        } catch (e) {
            console.log(e)
            return {
                status: 300,
                message: "Group Could not be created",
            }
        }

    },
    delete: async({url, locals, request}) => {
        const {session, user} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const id = form.get("id");

        try {
            await User.updateMany({groups: {$in: id}}, {
                $pull: {
                    groups: id
                }
            });
            await Group.deleteOne({_id: id})

            return {
                status: 200,
                message: "Group deleted successfully"
            }
        } catch (e) {
            return {
                status: 400,
                message: e.message
            }
        }
    },
    edit: async({locals, request, url}) => {
        const {session, user} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const id = form.get("id");
        const name = form.get("name");
        const description = form.get("description");

        try {
            nameSchema.parse(name);
            stringSchema.parse(description);
        } catch (e) {
            console.log(e)
            return {
                status: 400,
                message: e.messages[0].message
            }
        }


        try {


            const group = await Group.findByIdAndUpdate(id, {
                name: name,
                description: description,
            });

            return {
                status: 200,
                message: "Group updated successfully",
            }
        } catch (e) {
            return {
                status: 400,
                message: "Group Could not be updated",
            }
        }


    },
        enroll: async ({url, request, locals}) => {
            const {user, session} = await locals.auth.validateUser();
            protectRoute(url, user, session, 3)

            const data = await request.formData();
            const id = data.get("id");

            try {
                //Find all users in group
                const currentUsers = await User.find({groups: {$in: id} });

                //Get users from the form
                const users = JSON.parse(data.get("users"));

                //filter out users that are already in the group
                const oldUsers = currentUsers.filter(u => !(users.some(u2 => u2._id === u._id)));


                for (const u of oldUsers) {
                    await User.findByIdAndUpdate(u._id, {
                        $pull: {
                            group: id
                        }
                    })
                }


                for (let i = 0; i < users.length; i++) {
                    const userId = users[i];
                    await User.findByIdAndUpdate(userId, {
                        $addToSet: {
                            groups: id
                        }
                    });

                    return {
                        status: 200,
                        message: "Users enrolled successfully"
                    }
                }
            } catch (e) {
                console.log(e)
                return fail(300, e.message);
            }
        }
}
