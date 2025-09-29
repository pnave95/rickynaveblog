import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://example.com',
  server: {
    host: true,
    port: 5000
  },
  vite: {
    server: {
      allowedHosts: true
    },
    preview: {
      allowedHosts: true
    }
  }
});
