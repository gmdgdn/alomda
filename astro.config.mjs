// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import partytown from '@astrojs/partytown';

import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  site: 'https://elomda-sa.com',
  output: 'static',
  image: {
    domains: ["images.unsplash.com", "www.transparenttextures.com"],
  },
  integrations: [
    react(),
    mdx(),
    partytown({
      config: { forward: ["dataLayer.push"] }
    })
  ],

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