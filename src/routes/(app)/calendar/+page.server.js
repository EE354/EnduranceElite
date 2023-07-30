import {Event} from '$lib/server/models/Event';

const formatEvent = (event) => {
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


export const load = async ({locals}) => {
    try {
        const {session, user} = locals.auth.validateUser();

        const events = await Event.find({
            group: "",
        });
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