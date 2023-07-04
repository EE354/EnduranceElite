export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [3];

export const dictionary = {
		"/(app)": [~9,[3],[4]],
		"/(app)/account": [~15,[3],[4]],
		"/(admin)/admin": [5,[2]],
		"/(admin)/admin/events": [~6,[2]],
		"/(admin)/admin/groups": [7,[2]],
		"/(admin)/admin/news": [~8,[2]],
		"/(app)/calendar": [~16,[3],[4]],
		"/(app)/chat": [~17,[3],[4]],
		"/(app)/(contents)/contact-us": [10,[3],[4]],
		"/(app)/(contents)/crew": [11,[3],[4]],
		"/(app)/(contents)/join-the-crew": [12,[3],[4]],
		"/(app)/login": [~18,[3],[4]],
		"/(app)/news/[id]": [~19,[3],[4]],
		"/(app)/(contents)/registration": [13,[3],[4]],
		"/(app)/signup": [~20,[3],[4]],
		"/(app)/(contents)/tuition": [14,[3],[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';