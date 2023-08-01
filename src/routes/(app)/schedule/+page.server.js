import {Schedule} from '$lib/server/models/Schedule';
import {protectRoute} from '$lib/utils';

const formatSchedule = (schedule) => {
    return {
        resourceId: schedule.id,
        employee: schedule.employee,
        start: new Date(schedule.timeStamp.start),
        end: new Date(schedule.timeStamp.end),
        extendedProps: {
            description: schedule.description,
        },
        backgroundColor: `rgba(var(--color-primary-${900}) / 1);`,
    };
};

export const load = async ({locals, url}) => {
    try {
        const {session, user} = locals.auth.validateUser();
        
        protectRoute(url, session, user, 2)
        const schedules = await Schedule.find();
        let formattedSchedules = [];
        for (let schedule of schedules) {
            formattedSchedules.push(formatSchedule(schedule));
        }

        return {
            status: 200,
            user: user,
            schedules: formattedSchedules,
        }
    } catch (e) {
        console.log(e)
        return {
            status: 500,
            error: e
        }
    }

}