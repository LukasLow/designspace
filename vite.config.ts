import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// GitHub Pages liefert unter /<repo>/ aus. Der Workflow setzt BASE_PATH;
// lokal bleibt es leer, damit alles auf / läuft.
// Ohne @types/node deklarieren wir hier nur das eine Feld, das wir brauchen.
declare const process: { env: Record<string, string | undefined> };
const base = (process.env.BASE_PATH ?? '') as '' | `/${string}`;

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
