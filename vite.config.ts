import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@customTypers": path.resolve(__dirname, "./src/types"),
      "@functions": path.resolve(__dirname, "/src/functions"),
      "@icons": path.resolve(__dirname, "./src/icons"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
