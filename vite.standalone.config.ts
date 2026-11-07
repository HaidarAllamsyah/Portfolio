import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    __PORTFOLIO_STANDALONE__: 'true',
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    copyPublicDir: true,
    cssCodeSplit: false,
    lib: {
      entry: 'src/main.tsx',
      formats: ['iife'],
      name: 'Portfolio',
      fileName: () => 'portfolio.js',
      cssFileName: 'portfolio',
    },
    outDir: 'dist',
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        codeSplitting: false,
      },
    },
  },
});
