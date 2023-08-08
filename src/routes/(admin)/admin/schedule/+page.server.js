import { nameSchema, stringSchema, eventDateSchema } from "$lib/server/zodSchemas.js";
import {Schedule} from "$lib/server/models/Schedule";
import {protectRoute} from "$lib/utils.js";
import {User} from "$lib/server/models/User.js";


export const load = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();
    protectRoute(url, user, session, 3)

    return {

    }
}


export const actions = {
    create: async ({locals, request, url}) => {
        const {session, user} = await locals.auth.validateUser();

        protectRoute(url, user, session, 3);

        const form = await request.formData();
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const employeeName = form.get("employee").split(" ")
        const description = form.get("description");


        try {
            if (start > end) throw new Error("Start date must be before end date");
            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(employeeName[0]);
            nameSchema.parse(employeeName[1]);
            stringSchema.parse(description);


            const employee = await User.findOne({name: {first: employeeName[0], last: employeeName[1]}});
            if (!employee) throw new Error("Employee does not exist");

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
            console.log(e)
            return {
                status: 300,
                message: "Schedule not created",
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
    edit: async({locals, request, url}) => {
        const {session, user} = await locals.auth.validateUser();

        protectRoute(url, user, session, 3)

        const form = await request.formData();
        const id = form.get("id");
        const start = new Date(form.get("start"));
        const end = new Date(form.get("end"));
        const employeeName = form.get("employee").split(" ")
        const description = form.get("description");

        console.log(id, start, end, employeeName, description)


        try {
            if (start > end) throw new Error("Start date must be before end date");

            eventDateSchema.parse(start);
            eventDateSchema.parse(end);
            nameSchema.parse(employeeName[0]);
            nameSchema.parse(employeeName[1]);
            stringSchema.parse(description);

            const employee = await User.findOne({name: {first: employeeName[0], last: employeeName[1]}});
            if (!employee) throw new Error("Employee does not exist");


            const schedule = await Schedule.findById(id);



            schedule.timeStamp.start = start;
            schedule.timeStamp.end = end;
            schedule.employee = employee;
            schedule.description = description;

            await schedule.save();

            return {
                status: 200,
                message: "Schedule updated successfully",
            }
        } catch (e) {
            console.log(e)
            return {
                status: 300,
                message: "Schedule not updated",
            }
        }
    }
}