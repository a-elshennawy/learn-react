import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // add test property to be able to use vitest
  test: {
    environment: "jsdom",
    globals: true, // This makes functions like `describe`, `test`, and `expect` globally available
    setupFiles: "./src/setupTests.js", //<-- we created that in step 3
  },
});
