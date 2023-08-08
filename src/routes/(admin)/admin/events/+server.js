import {Event} from "$lib/server/models/Event.js";
import {protectRoute} from "$lib/utils.js";
import {json} from "@sveltejs/kit";
import {Group} from "$lib/server/models/Group.js";


export const GET = async ({url, locals}) => {
    const {session, user} = await locals.auth.validateUser();

    protectRoute(url, user, session, 3)

    const events = await Event.find({}).sort({timeStamp: 1})
    const groups = await Group.find({}).sort({name: 1})

    let formattedEvents = [];
    for (let event of events) {
        const group = groups.find(group => group._id.toString() === event.group);
        formattedEvents.push({
            id: event._id,
            timeStamp: event.timeStamp,
            name: event.name,
            description: event.description,
            location: event.location,
            group: group?.name || "",
        })
    }

    return json({
        events: formattedEvents,
        groups: groups,
    });
}