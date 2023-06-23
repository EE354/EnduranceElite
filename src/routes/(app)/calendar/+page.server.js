import {Event} from '$lib/server/models/Event';

const formatEvent = (event) => {
    return {
        resourceId: event.id,
        title: event.name,
        start: event.dateTime.startDate,
        end: event.dateTime.endDate,
        allDay: event.allDay,
        extendedProps: {
            description: event.description,
            location: event.location,
        }
    };
};


export const load = async ({locals}) => {
    try {
        const {session, user} = locals.auth.validateUser();

        const events = await Event.find();
        let formattedEvents = [];
        for (let event of events) {
            formattedEvents.push(formatEvent(event));
        }

        return {
            status: 200,
            user: user,
            events: formattedEvents,
        }
    } catch (e) {
        console.log(e)
        return {
            status: 500,
            error: e
        }
    }

}