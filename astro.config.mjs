import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://example.com',
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
