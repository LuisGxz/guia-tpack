import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://username.github.io',
  base: '/guia-dinamica/',
  vite: {
    plugins: [tailwindcss()],
  },
});
