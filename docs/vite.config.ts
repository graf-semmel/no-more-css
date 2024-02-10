import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  base: "/a-css",
  server: {
    port: 3000,
    open: true,
  },
  plugins: [solid()],
});
