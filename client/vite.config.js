import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";

export default defineConfig({
  server: {
    port: 8081,
  },
  optimizeDeps: {
    include: ['just-throttle', 'dayjs']
  },
  plugins: [
    svelte({
      preprocess: [preprocess()],
    }),
  ],
});
