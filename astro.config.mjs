import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://orbitstudio.co',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  image: {
    domains: ['images.unsplash.com'],
  },
});
