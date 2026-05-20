import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: isVercel ? 'https://tech-in-class.vercel.app' : 'https://LuisGxz.github.io',
  base: isVercel ? '/' : '/guia-tpack/',
  vite: {
    plugins: [tailwindcss()],
  },
});
