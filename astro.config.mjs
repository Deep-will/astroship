import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercelStatic from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  site: "https://www.organicbabyclothes.cc/",
  sitemap: true,
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap()],
  output: 'static',
  adapter: vercelStatic(),
});