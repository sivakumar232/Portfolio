// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';  // ESM-style import

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
