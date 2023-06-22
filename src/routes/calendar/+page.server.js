import {Event} from '$lib/server/models/Event';

const formatEvent = (event) => {
    let formatedEvent ={
        resourceId: event.id,
        title: event.name,
        start: new Date(event.dateTime.startDate),
        end: new Date(event.dateTime.endDate),
        allDay: event.allDay,
        extendedProps: {
            description: event.description,
            location: event.location,
        }
    };

    return formatedEvent;
};


export const load = async ({locals}) => {
    const {session, user} = locals.auth;

    const events = await Event.find();
    let formatedEvents = [];
    for (let event of events) {
        formatedEvents.push(formatEvent(event));
    }

    return {
        status: 200,
        user: user,
        events: formatedEvents,
    }
}