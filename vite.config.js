import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite serves /src as the frontend. The /api folder is NOT bundled here —
// it's picked up separately by Vercel/Netlify as serverless functions.
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy /api calls to a local dev function runner when developing
    // (e.g. `vercel dev` or `netlify dev` running on port 3000)
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
