import {Event} from '$lib/server/models/Event';

const formatEvent = (event) => {
    /* TODO: implement a better color picking system*/
    //Generate a number between 0 and 255
    const genColor = () => Math.floor(Math.random() * 6);
    return {
        resourceId: event.id,
        title: event.name,
        start: new Date(event.timeStamp.start),
        end: new Date(event.timeStamp.end),
        allDay: event.allDay,
        extendedProps: {
            description: event.description,
            location: event.location,
        },
        backgroundColor: `rgba(var(--color-secondary-${900}) / 1);`,
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