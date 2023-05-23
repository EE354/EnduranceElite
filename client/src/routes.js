import Home from './pages/Home.svelte';
import PageNotFound from "./pages/PageNotFound.svelte";
import Login from "./pages/Login.svelte";

export const routes = [
    {
        name: '/',
        component: Home
    },
    {
        name: 'login',
        component: Login
    },
    {
        name: '404',
        path: "404",
        component: PageNotFound
    }
];