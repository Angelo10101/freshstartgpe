import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  base: "/",
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss(),
    nitro(),
    viteTsconfigPaths(),
  ],
});
