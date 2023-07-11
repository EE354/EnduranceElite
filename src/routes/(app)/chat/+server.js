import {Chat} from "$lib/server/models/Chat.js";
import {json} from "@sveltejs/kit";

export const GET = async ({locals}) => {
    const {user, session} = await locals.auth.validateUser();
    try{
        const chats = await Chat.find({members: user.userId})
        return json(chats)
    } catch(e){
        console.log (e)
    }
}
