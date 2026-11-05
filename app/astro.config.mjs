// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://www.projectlumora.com",
    base: "/",
    image: {
      service: {
        cacheMaxAge: 365,
        formats: ['webp', 'avif'],
        presets: {
          hero: {
            widths: [320, 480, 640, 800, 1024],
            formats: ['webp', 'jpeg'],
            placeholder: true,
            loading: 'lazy'
          }
        }
      }
    }
});
