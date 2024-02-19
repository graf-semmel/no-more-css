import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";

export default defineConfig({
  base: "/a-css",
  server: {
    port: 3000,
    open: true,
  },
  plugins: [solid()],
  build: {
    cssMinify: "lightningcss",
  },
});
