import {dateOfBirthSchema, eventDateSchema, nameSchema, stringSchema} from "$lib/server/zodSchemas.js";
import {Event} from "$lib/server/models/Event";
import {protectRoute} from "$lib/utils.js";
import {Group} from "$lib/server/models/Group.js";
import mongoose from "mongoose";


export const load = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();
    protectRoute(url, user, session, 3)

    return {

    }
}

export const actions = {
    create: async ({locals, request, url}) => {
        const {session, user} = await locals.auth.validateUser();
        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const name = form.get("name");
        const description = form.get("description");
        const location = form.get("location");
        const groupName = form.get("group");

        try {
            if (start > end) throw new Error("Start date must be before end date");
            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(name);
            stringSchema.parse(description);
            stringSchema.parse(location);
            stringSchema.parse(groupName);

            let group = ""
            if (groupName !== "") {
                group = await Group.findOne({name: groupName});
                if (!group) throw new Error("Group does not exist");
            }

            await Event.create({
                timeStamp: {
                    start: start,
                    end: end,
                },
                name: name,
                description: description,
                location: location,
                group: group?._id.toString() ?? "",
            });

            return {
                status: 200,
                message: "Event created successfully",
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

        protectRoute(url, user, session, 3);

        const form = await request.formData();
        const id = form.get("id");

        try {
            await Event.deleteOne({_id: id})

            return {
                status: 200,
                message: "Event deleted successfully"
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
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const name = form.get("name");
        const description = form.get("description");
        const location = form.get("location");
        const groupName = form.get("group");

        try {
            if (start > end) throw new Error("Start date must be before end date");

            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(name);
            stringSchema.parse(description);
            stringSchema.parse(location);
            stringSchema.parse(groupName);

            let group = ""
            if (groupName !== "") {
                const foundGroup = await Group.findOne({name: groupName});
                if (!foundGroup) throw new Error("Group does not exist");
                group = foundGroup._id.toString()
                console.log(group)
            }



            const event = await Event.findById(id);
            console.log(event)

            event.timeStamp.start = start;
            event.timeStamp.end = end;
            event.name = name;
            event.description = description;
            event.location = location;
            event.group = group;

            await event.save();

            return {
                status: 200,
                message: "Event updated successfully",
            }
        } catch (e) {
            console.log(e)
            return {
                status: 300,
                message: "Event updated unsuccessfully",
                error: true
            }
        }
    }
}