import {writable} from 'svelte/store';
import axios from "axios";

export const account = writable({});

export const refresh = async () => {
    try {
        if (document.cookie.match(/^(.*;)?\s*session_token\s*=\s*[^;]+(.*)?$/)
        ) return;
        const response = await axios({
            url:'http://localhost:3000/api/user/refresh',
            method: 'GET',
            credentials: 'include',
            mode: 'cores'
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }

};