import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  image: {
    service: passthroughImageService(),
  },
  adapter: vercel(),
});
