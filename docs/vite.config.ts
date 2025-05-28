import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import * as path from "node:path";

export default defineConfig({
  base: "/no-more-css",
  server: {
    port: 3000,
    open: true,
  },
  plugins: [solid()],
  build: {
    cssMinify: "lightningcss",
  },
  resolve: {
    alias: {
      "@acss": path.resolve(__dirname, "../src"),
    },
  },
});
