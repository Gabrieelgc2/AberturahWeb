import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [

    // 1. TanStack Start (se estiver usando o framework de roteamento/SSR)
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    
    // 2. React Plugin (Vite padrão)
    react(), 
    
    // 3. Suporte aos caminhos do tsconfig (o alias "@")
    tsconfigPaths(),
  ],
  
  
  // 5. Build config (Cloudflare/Static)
  build: {
    outDir: "dist",
  },
});