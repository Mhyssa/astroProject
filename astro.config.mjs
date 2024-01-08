import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://incandescent-caramel-982fd6.netlify.app",
  integrations: [preact()]
});