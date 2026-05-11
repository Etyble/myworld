import { defineConfig } from "astro/config";

// Cloudflare Pages sets CF_PAGES=1 during build; GitHub Actions does not
const isCloudflare = !!process.env.CF_PAGES;

export default defineConfig({
  output: "static",
  site: isCloudflare ? undefined : "https://etyble.github.io",
  base: isCloudflare ? "/" : "/myworld",
});
