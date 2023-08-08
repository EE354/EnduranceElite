import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";
import {Schedule} from "$lib/server/models/Schedule.js";
import {User} from "$lib/server/models/User.js";

export const GET = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3);

    const resSchedules = await Schedule.find({})

    let schedules = [];
    for (let schedule of resSchedules) {
        const employee = await User.findById(schedule.employee);
        schedules.push({
            id: schedule._id,
            timeStamp: schedule.timeStamp,
            employee: employee,
            description: schedule.description,
            __v: 0,
        })
    }

    return json(schedules);
}