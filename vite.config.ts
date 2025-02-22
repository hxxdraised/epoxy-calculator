import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: "public/*",
          dest: "epoxy-calculator-gh-pages",
        },
      ],
    }),
  ],
  base: "/epoxy-calculator/",
  resolve: {
    alias: {
      "@/public": "/public",
      "@": "/src",
    },
  },
});
