import { nameSchema, stringSchema, eventDateSchema } from "$lib/server/zodSchemas.js";
import {Schedule} from "$lib/server/models/Schedule";


export const load = async () => {

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

            await Schedule.create({
                timeStamp: { start: start, end: end},
                name: name,
                description: description,
                location: location,
                employee: employee,
            });

            return {
                status: 200,
                message: "Schedule created successfully",
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
            await Schedule.deleteOne({_id: id})

            return {
                status: 200,
                message: "Schedule deleted successfully"
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

    }
}