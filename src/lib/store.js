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

export const editTraining = writable({
    name: "",
    description: "",
    location: "",
    timeStamp: {
        start: "",
        end: "",
    }
});

export const editGroup = writable({
    name: "",
    members: "",
    description: "",
});