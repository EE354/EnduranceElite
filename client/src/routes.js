import Home from './pages/Home.svelte';
import PageNotFound from "./pages/PageNotFound.svelte";

export const routes = [
    {
        name: '/',
        component: Home
    },
    {
        name: '404',
        path: "404",
        component: PageNotFound
    }
];