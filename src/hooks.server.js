import mongoose from 'mongoose';
import {MONGOOSE_CONNECTION} from "$env/static/private";
import {auth} from "$lib/server/lucia.js";

export const handle = async ({event, resolve}) => {

    await mongoose.connect(MONGOOSE_CONNECTION);
    event.locals.auth = auth.handleRequest(event);
    return await resolve(event);
}