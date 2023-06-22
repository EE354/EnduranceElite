import lucia from 'lucia-auth';
import adapter from "@lucia-auth/adapter-mongoose";
import mongoose from "mongoose";
import {dev} from "$app/environment";
import { sveltekit } from "lucia-auth/middleware";

import { User } from "$lib/server/models/User.js";
import { Key } from "$lib/server/models/Key.js";
import { Session } from "$lib/server/models/Session.js";


export const auth = lucia({
        adapter: adapter(mongoose),
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),
    transformDatabaseUser: (userData) => {
        return {
            userId: userData.id,
            name: {
                first: userData.name.first,
                last: userData.name.last
            },
            dateOfBirth: userData.dateOfBirth,
            email: userData.email,
        };
    }
});