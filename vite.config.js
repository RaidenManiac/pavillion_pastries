import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [{
    name: 'optimize-hero-reference',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('styles.css')) {
        return code.replaceAll('/assets/hero-pastries.png', '/assets/hero-pastries.webp');
      }
    },
  }],
});
