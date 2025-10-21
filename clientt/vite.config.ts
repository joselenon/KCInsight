import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3412,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    global: 'window',
  },
});
