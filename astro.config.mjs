// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alomda-sa.com', // Replace with actual domain if available
  output: 'static',
  integrations: [react(), sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});