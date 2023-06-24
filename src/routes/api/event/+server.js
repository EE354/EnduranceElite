import {Event} from "$lib/server/models/Event.js";
import {json} from "@sveltejs/kit";


export const GET = async ({locals, url}) => {
    const {session} = locals.auth.validateUser();

    const id = url.searchParams.get('id');

    const event = await Event.findById(id);

    return json(event)
}