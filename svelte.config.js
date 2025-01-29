import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { redirects } from "./src/lib/redirects.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    prerender: {
      handleHttpError: "warn", // @todo remove
      entries: ["*", ...Object.keys(redirects)],
    },
    adapter: adapter({
      paths: {
        // @see https://svelte.dev/docs/kit/adapter-static#GitHub-Pages
        base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
      },
      strict: false, // todo, remove
    }),
  },
};

export default config;
