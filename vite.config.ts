
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // This ensures that pre-rendering works correctly
  ssr: {
    noExternal: ['@radix-ui/**'],
  },
  build: {
    // Generate manifest for SSR
    manifest: true,
    // If SSR build, use different outDir
    outDir: command === 'build' && process.env.SSR ? 'dist-ssr' : 'dist',
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: command === 'build' && process.env.SSR 
        ? ['react', 'react-dom', 'react-router-dom'] 
        : []
    }
  }
}));
