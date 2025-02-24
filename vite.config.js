import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Website-for-Tilly/', // Define o caminho base do GitHub Pages
});
