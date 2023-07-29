import {Schedule} from '$lib/server/models/Schedule';
import {protectRoute} from '$lib/utils';

const formatSchedule = (schedule) => {
    /* TODO: implement a better color picking system*/
    //Generate a number between 0 and 255
    const genColor = () => Math.floor(Math.random() * 256);
    return {
        resourceId: schedule.id,
        title: schedule.name,
        name: schedule.employee,
        start: new Date(schedule.timeStamp.start),
        end: new Date(schedule.timeStamp.end),
        allDay: schedule.allDay,
        extendedProps: {
            description: schedule.description,
            location: schedule.location,
        },
        backgroundColor: `rgb(${genColor()}, ${genColor()}, ${genColor()})`,
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