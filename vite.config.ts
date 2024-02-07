import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [solid()],
})
