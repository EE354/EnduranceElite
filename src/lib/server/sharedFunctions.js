import {redirect} from "@sveltejs/kit";


export const loginRedirect = (url) => {
    const redirectUrl = url.pathname;
    if (redirectUrl) {
        throw redirect(302, `/login?redirectUrl=${redirectUrl}`);
    }
}

export const returnRedirect = (url) => {
    const redirectUrl = url.searchParams.get("redirectUrl");
    if (redirectUrl) {
        throw redirect(302, `/${redirectUrl.slice(1)}`);
    }
    throw redirect(302, `/`);
}

//Route protection function
export const protect = async (user, session, minRoleId) => {

    if (minRoleId === 0) return;
    if (!user || !session) {
        mod
        throw redirect(302, `/login`, {});
    }
}