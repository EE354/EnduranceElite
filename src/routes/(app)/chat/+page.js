export const load = async ({fetch}) => {
    const res = await fetch("/chat");
    const chats = await res.json();

    return {
    chats: chats,
    }
}