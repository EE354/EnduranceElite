import {redirect} from "@sveltejs/kit";
export const returnRedirect = (url) => {
    const redirectUrl = url.searchParams.get("redirectUrl");
    if (redirectUrl) {
        throw redirect(302, `/${redirectUrl.slice(1)}`);
    }
}

export const loginRedirect = (url) => {
    const redirectUrl = url.pathname;
    if (redirectUrl) {
        throw redirect(302, `/login?redirectUrl=${redirectUrl}`);
    }
}

export const protectRoute = (url, user, session, minRole = 1) => {
    //If user or session doesn't exist, redirect to login
    if (!user || !session) throw redirect(307, `/login?redirectUrl=${url.pathname}`);

    //If user role is less than minRole, redirect to home
    if (minRole > user.roleId) throw redirect(309, `/`);
}