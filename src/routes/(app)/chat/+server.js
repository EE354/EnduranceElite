import {Chat} from "$lib/server/models/Chat.js";
import {json} from "@sveltejs/kit";

export const GET = async ({locals}) => {
    const {user, session} = await locals.auth.validateUser();


    try{
        console.log(user.userId)
        const chats = await Chat.find({members: user.userId})
        console.log (chats)
        return json(chats)
    } catch(e){
        console.log (e)
    }

}