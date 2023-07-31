import {protectRoute} from "$lib/utils.js";

export const load = async ({fetch, locals}) => {
    const res = await fetch("/training")
    return {
        training: res.json()
    }
}