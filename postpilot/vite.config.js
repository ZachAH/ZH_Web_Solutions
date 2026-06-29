import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone marketing site for PostPilot — deploys to postpilot.zachhowell.dev
export default defineConfig({
  plugins: [react()],
});
