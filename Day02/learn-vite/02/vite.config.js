import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md2html } from "./md2html/bundle";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), md2html()]
})
