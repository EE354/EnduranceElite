import mongoose from 'mongoose';
import {MONGOOSE_CONNECTION} from "$env/static/private";

export const handle = async ({event, resolve}) => {
    try {
        await mongoose.connect(MONGOOSE_CONNECTION);
        return resolve(event);
    } catch (err) {
        console.log(err)
    }
}