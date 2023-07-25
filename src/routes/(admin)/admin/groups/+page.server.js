import {dateOfBirthSchema, eventDateSchema, nameSchema, stringSchema} from "$lib/server/zodSchemas.js";
import {Group} from "$lib/server/models/Group";
import {protectRoute} from "$lib/utils.js";


export const load = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();
    protectRoute(url, user, session, 3)

    return {

    }
}

export const actions = {
    create: async ({locals, request}) => {
        const {session, user} = await locals.auth.validateUser();

        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const name = form.get("name");
        const members = form.get("members");
        const description = form.get("description");


        try {

            nameSchema.parse(name);
            stringSchema.parse(members);
            stringSchema.parse(description);

            await Group.create({
                name: name,
                members: members,
                description: description,
            });

            return {
                status: 200,
                message: "Group created successfully",
            }
        } catch (e) {
            return {
                status: 400,
                message: e.message,
            }
        }

    },
    delete: async({locals, request}) => {
        const {session, user} = await locals.auth.validateUser();

        const form = await request.formData();
        const id = form.get("id");

        try {
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
        const members = form.get("members");
        const description = form.get("description");


        try {
            nameSchema.parse(name);
            stringSchema.parse(members);
            stringSchema.parse(description);

            const group = await Group.findById(id);

            group.name = name;
            group.members = members;
            group.description = description;

            await group.save();

            return {
                status: 200,
                message: "Event updated successfully",
            }
        } catch (e) {
            return {
                status: 400,
                message: e.message,
            }
        }


    }
}