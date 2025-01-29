import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import svg from "@poppanator/sveltekit-svg";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    svg({
      svgoOptions: {
        plugins: [{ name: "removeAttrs", params: { attrs: "(width|height)" } }],
      },
    }),
  ],
});
