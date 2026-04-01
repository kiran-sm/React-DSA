import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    include: ["src/tests/**/*.test.jsx", "src/tests/**/*.test.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json"],
      include: ["src/**/*.{js,jsx}"],
      exclude: ["src/tests/**", "src/main.jsx", "src/setupTests.js"],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
