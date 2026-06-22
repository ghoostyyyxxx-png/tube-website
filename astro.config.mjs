import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Falls hier 'base' steht, lösche die Zeile oder setze sie auf '/'
  // Stelle sicher, dass kein spezielles outDir definiert ist
  base: '/',

  adapter: cloudflare()
});