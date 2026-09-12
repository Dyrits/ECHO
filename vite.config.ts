import path from "node:path";

import solidPlugin from "vite-plugin-solid";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  build: {
    target: "esnext",
  },
  fmt: {
    sortImports: true,
    sortPackageJson: {
      sortScripts: true,
    },
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    options: { typeAware: true, typeCheck: true },
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
  },
  plugins: lazyPlugins(() => [solidPlugin()]),
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: /^solid-icons\/(.+)$/,
        replacement: path.resolve(__dirname, "node_modules/solid-icons/$1/index.js"),
      },
    ],
  },
  server: {
    port: 3000,
  },
  staged: {
    "*": "vp check --fix",
  },
});
