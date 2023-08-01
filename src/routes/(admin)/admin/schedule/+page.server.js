import { nameSchema, stringSchema, eventDateSchema } from "$lib/server/zodSchemas.js";
import {Schedule} from "$lib/server/models/Schedule";
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

        protectRoute(url, user, session, 3);

        const form = await request.formData();
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const employee = form.get("employee")
        const description = form.get("description");

        if (start > end) throw new Error("Start date must be before end date");

        try {
            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(employee);
            stringSchema.parse(description);

            await Schedule.create({
                timeStamp: { start: start, end: end},
                employee: employee,
                description: description,
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

        protectRoute(url, user, session, 3);

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
        const {session, user} = await locals.auth.validateUser();

        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const id = form.get("id");
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const name = form.get("employee");
        const description = form.get("description");

        if (start > end) throw new Error("Start date must be before end date");

        try {
            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(name);
            stringSchema.parse(description);
            stringSchema.parse(location);

            const schedule = await Schedule.findById(id);

            schedule.timeStamp.start = start;
            schedule.timeStamp.end = end;
            schedule.name = name;
            schedule.description = description;
            schedule.location = location;

            await schedule.save();

            return {
                status: 200,
                message: "Schedule updated successfully",
            }
        } catch (e) {
            return {
                status: 400,
                message: e.message,
            }
        }
    }
}