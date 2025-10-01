import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Your additional aliases here
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});