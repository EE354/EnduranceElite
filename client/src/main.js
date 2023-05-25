import './global.css';
import axios from "axios";
import App from './App.svelte';

axios.defaults.withCredentials = true;

const app = new App({
	target: document.body
});

export default app;
