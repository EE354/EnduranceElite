import {dateOfBirthSchema, eventDateSchema, nameSchema, stringSchema} from "$lib/server/zodSchemas.js";
import {Event} from "$lib/server/models/Event";


export const load = async () => {
    const env = await Event.find({}).sort({timeStamp: 1});
    console.log(env);
    const events = env;
    return {
        events: JSON.parse(JSON.stringify(env)),
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
        // TODO: implement delete
        const {session, user} = await locals.auth.validateUser();

        const form = await request.formData();

        try {
            

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
    update: async({locals, request}) => {
        //TODO: implement update
        const {session, user} = await locals.auth.validateUser();

        const form = await request.formData();

        try {
            

            return {
                status: 200,
                message: "Event updated successfully"
            }
        } catch (e) {
            return {
                status: 400,
                message: e.message
            }
        }
    }
}