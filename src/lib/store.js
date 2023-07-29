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
    title: "",
    description: "",
    video: "",
    tests: [],
    currentlyEditing: 0,
});

export const editGroup = writable({
    name: "",
    members: "",
    description: "",
});


export const questions = writable([]);