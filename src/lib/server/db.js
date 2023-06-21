import mongoose from 'mongoose';
import {MONGOOSE_CONNECTION} from "$env/static/private";

const connection = (async () => {
    try {
        let c = await mongoose.connect(MONGOOSE_CONNECTION);
        console.log("MongoDB connected");
        return c
    } catch (err) {
        console.log(err)
    }

});

export default function connectDB () {
    return connection
}