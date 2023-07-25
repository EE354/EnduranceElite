import { writable } from "svelte/store";

export const editEvent = writable({
    name: "",
    description: "",
    location: "",
    timeStamp: {
        start: "",
        end: "",
    }
});