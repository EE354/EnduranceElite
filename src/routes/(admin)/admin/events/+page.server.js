import {dateOfBirthSchema, eventDateSchema, nameSchema, stringSchema} from "$lib/server/zodSchemas.js";
import {Event} from "$lib/server/models/Event";
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

        const form = await request.formData();
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const name = form.get("name");
        const description = form.get("description");
        const location = form.get("location");

        if (start > end) throw new Error("Start date must be before end date");


        try {
            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(name);
            stringSchema.parse(description);
            stringSchema.parse(location);

            await Event.create({
                timeStamp: {
                    start: start,
                    end: end,
                },
                name: name,
                description: description,
                location: location,
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
    edit: async({locals, request}) => {
        //TODO: implement update
        const {session, user} = await locals.auth.validateUser();

        const form = await request.formData();
        const id = form.get("id");
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const name = form.get("name");
        const description = form.get("description");
        const location = form.get("location");
            console.log({id, start, end, name, description, location})

        if (start > end) throw new Error("Start date must be before end date");

        try {
            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(name);
            stringSchema.parse(description);
            stringSchema.parse(location);




            const event = await Event.findById(id);

            event.timeStamp.start = start;
            event.timeStamp.end = end;
            event.name = name;
            event.description = description;
            event.location = location;

            await event.save();

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