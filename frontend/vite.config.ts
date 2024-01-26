import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: {
      "ts-jest": {
        tsconfig: "path/to/tsconfig.json",
      },
    },
    environment: "jsdom",
    setupFilesAfterEnv: ["./setupTests.js"],
  },
});
