import {redirect} from "@sveltejs/kit";
import {auth} from "$lib/server/lucia.js";
import {loginRedirect} from "$lib/server/sharedFunctions.js";


export const load = async ({locals, url}) => {
    const {session, user} = await locals.auth.validateUser();

    if (!session) loginRedirect(url);

    // TEMP DUMMY DATA
    const groups = [
        {
            id: 1,
            name: "Group 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sapien quam. Nam in porta augue, non ultricies erat. Nam vitae mauris quis magna tempus pretium. Curabitur quis augue tincidunt, euismod urna auctor, tincidunt massa. Phasellus nec sollicitudin turpis. Ut egestas arcu rutrum, molestie velit at, tempor ligula. Pellentesque quis efficitur nisl. Morbi tempus, libero ac ultrices fermentum, libero mauris tincidunt turpis, placerat eleifend nunc nisi nec ligula. Donec luctus ut nulla vel auctor. Sed eget nunc tellus.",
        },
        {
            id: 2,
            name: "Group 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sapien quam. Nam in porta augue, non ultricies erat. Nam vitae mauris quis magna tempus pretium. Curabitur quis augue tincidunt, euismod urna auctor, tincidunt massa. Phasellus nec sollicitudin turpis. Ut egestas arcu rutrum, molestie velit at, tempor ligula. Pellentesque quis efficitur nisl. Morbi tempus, libero ac ultrices fermentum, libero mauris tincidunt turpis, placerat eleifend nunc nisi nec ligula. Donec luctus ut nulla vel auctor. Sed eget nunc tellus.",
        },
        {
            id: 3,
            name: "Group 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sapien quam. Nam in porta augue, non ultricies erat. Nam vitae mauris quis magna tempus pretium. Curabitur quis augue tincidunt, euismod urna auctor, tincidunt massa. Phasellus nec sollicitudin turpis. Ut egestas arcu rutrum, molestie velit at, tempor ligula. Pellentesque quis efficitur nisl. Morbi tempus, libero ac ultrices fermentum, libero mauris tincidunt turpis, placerat eleifend nunc nisi nec ligula. Donec luctus ut nulla vel auctor. Sed eget nunc tellus.",
        },
        {
            id: 4,
            name: "Group 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sapien quam. Nam in porta augue, non ultricies erat. Nam vitae mauris quis magna tempus pretium. Curabitur quis augue tincidunt, euismod urna auctor, tincidunt massa. Phasellus nec sollicitudin turpis. Ut egestas arcu rutrum, molestie velit at, tempor ligula. Pellentesque quis efficitur nisl. Morbi tempus, libero ac ultrices fermentum, libero mauris tincidunt turpis, placerat eleifend nunc nisi nec ligula. Donec luctus ut nulla vel auctor. Sed eget nunc tellus.",
        },
    ]

    return {
        status: 200,
        user: user,
        session: session,
        groups
    }

}

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export const actions = {
    logout: async ({locals, url}) => {
        const {session} = await locals.auth.validateUser();

        if (!session?.sessionId) loginRedirect(url);

        await auth.invalidateSession(session.sessionId);


        throw loginRedirect(url);
    }
}