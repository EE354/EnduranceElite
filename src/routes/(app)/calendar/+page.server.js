import {Event} from '$lib/server/models/Event';
import {Schedule} from "$lib/server/models/Schedule.js";
import {User} from "$lib/server/models/User.js";

export const load = async ({locals}) => {
    const formatEvent = async (event) => {
        return {
            resourceId: event.id,
            title: event.name,
            start: new Date(event.timeStamp.start),
            end: new Date(event.timeStamp.end),
            allDay: false,
            extendedProps: {
                description: event.description,
                location: event.location,
            },
            backgroundColor: `rgba(var(--color-primary-${900}) / 1);`,
        };
    };

    const formatSchedule = async (event) => {
        const employee = await User.findById(event.employee);
        return {
            resourceId: event.id,
            title: "Work Shift: " + employee.name.first + " " + employee.name.last,
            start: new Date(event.timeStamp.start),
            end: new Date(event.timeStamp.end),
            allDay: false,
            extendedProps: {
                employee: event.employee,
                description: event.description,
                location: event.location,
            },
            backgroundColor: `rgba(var(--color-primary-${900}) / 1);`,
        };
    };

    const formatEvents = async (events) => {
        let formattedEvents = [];
        events.forEach((event) => {
             formattedEvents.push(formatEvent(event));
        })
        console.log(events);
        return formattedEvents;
    }
    
    const formatSchedules = async (events) => {
        let formattedEvents = [];
        events.forEach((event) => {
             formattedEvents.push(formatSchedule(event));
        })
        return formattedEvents;
    }

    try {
        const {session, user} = await locals.auth.validateUser();
        let groupEvents = [];
        let schedule = [];
        let adminEvents = [];
        const publicEvents = await Event.find({
            group: "",
        });

        if (user?.roleId >= 1) {
            groupEvents = await Event.find({
                group: {
                    $in: user.groups,
                }
            });
        }
        if (user?.roleId >= 2) {
            schedule = await Schedule.find({
                employee: user.userId,
            })
        }
        if (user?.roleId >= 3) {
            adminEvents.push(...await formatEvents((await Event.find())))
            adminEvents.push(...await formatSchedules((await Schedule.find())))
        }

        return {
            status: 200,
            user: user,
            publicEvents: await formatEvents(publicEvents, user),
            groupEvents: await formatEvents(groupEvents, user),
            schedule: await formatSchedules(schedule, user),
            adminEvents: adminEvents,
        }
    } catch (e) {
        console.log(e)
        return {
            status: 500,
            error: e
        }
    }

}