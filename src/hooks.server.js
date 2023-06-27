import mongoose from 'mongoose';
import { MONGODB_URI } from "$env/static/private";
import { auth } from "$lib/server/lucia.js";

export const handle = async ({event, resolve}) => {

    await mongoose.connect(MONGODB_URI);
    event.locals.auth = auth.handleRequest(event);
    return await resolve(event);
}