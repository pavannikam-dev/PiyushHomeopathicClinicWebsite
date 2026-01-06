import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pavannikam-dev.github.io',
  base: '/PiyushHomeopathicClinicWebsite/',
  output: 'static',
  integrations: [tailwind()],
});
