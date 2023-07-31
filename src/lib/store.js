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
    id: "",
    name: "",
    description: "",
});

export const adminUser = writable({});


export const questions = writable([]);

export const editUser = writable({});