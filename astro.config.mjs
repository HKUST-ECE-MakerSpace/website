// @ts-check
import { defineConfig } from "astro/config";

// Static output (default): `npm run build` emits a fully static `dist/`.
export default defineConfig({
  site: "https://web.ecemaker.space",
  build: {
    inlineStylesheets: "auto",
  },
});
