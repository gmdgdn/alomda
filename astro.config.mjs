// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://elomda-sa.com', // Replace with actual domain if available
  output: 'static',
  image: {
    domains: ["images.unsplash.com", "www.transparenttextures.com"],
  },
  integrations: [react(), sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['@resvg/resvg-js']
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },

  adapter: cloudflare()
});