import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,          // permite usar describe, it, expect sem importar
    environment: "jsdom",   // simula o navegador no Node.js
    setupFiles: ["./src/test/setup.ts"], // arquivo de configuração inicial
    css: true,
  },
});
