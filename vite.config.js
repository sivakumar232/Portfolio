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
  base:process.env.VITE_BASE_PATH || "/Portfolio"
});
