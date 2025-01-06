import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  if (command === "serve") {
    return {
      plugins: [vue()]
    }
  } else {
    if (mode === "lib") {
      return {
        plugins: [vue()],
        build: {
          lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "SagarImageText",
            fileName: "sagar-image-text",
          },
          rollupOptions: {
            external: ["vue"],
            output: {
              globals: {
                vue: "Vue",
              },
            },
          },
        },
      }
    } else {
      return {
        base: "/sagar-image-text/",
        plugins: [vue()],
        build: {
          outDir: "docs",
        }
      }
    }
  }
})
