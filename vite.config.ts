import { defineConfig } from "vite";
import path from "path";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({ eslint: { lintCommand: "eslint src" }, overlay: false }),
  ],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      "@asheshDon": path.resolve("src"),
      "@asheshDon/icons": path.resolve("src/components/common/icons"),
      "@asheshDon/components": path.resolve("src/components"),
      "@asheshDon/theme": path.resolve("src/theme"),
      "@asheshDon/assets": path.resolve("src/assets"),
      "@asheshDon/routes": path.resolve("src/routes"),
      "@asheshDon/hooks": path.resolve("src/hooks"),
    },
  },
});
