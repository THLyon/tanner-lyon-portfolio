import { defineConfig } from 'vite';
import path from 'path';
//import solidPlugin from 'vite-plugin-solid';
// import { chromeExtension } from 'vite-plugin-chrome-extension';

export default defineConfig({
  plugins: [solidPlugin({ dev: true })],
  build: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json"
    ],
    input: './Client/index.html',
    outDir: path.join(__dirname, './extension/dist'),
    output: {
      sourcemap: false,
      format: 'iife',
      name: 'app',
      file: './Client/index.html',
    },
    rollupOptions: {
      external: ['chrome'],
    },
    base: '/Tanner-Lyon-Portfolio/',
  },
});
