import { fileURLToPath, URL } from "url";
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(), ViteWebfontDownload()],
    base: command === "build" ? "" : "./",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  }
});
