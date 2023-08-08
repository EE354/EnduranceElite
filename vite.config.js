import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { importAssets } from 'svelte-preprocess-import-assets'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'



export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA(),
	]
});
