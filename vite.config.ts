import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4201,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
