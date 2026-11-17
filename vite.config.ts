import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// GitHub Pages liefert unter /<repo>/ aus. Der Workflow setzt BASE_PATH;
// lokal bleibt es leer, damit alles auf / läuft.
const base = process.env.BASE_PATH ?? '';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        strict: true
      }),
      paths: { base }
    })
  ]
});
