import path from "node:path";

import solidPlugin from "vite-plugin-solid";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  build: {
    target: "esnext",
  },
  fmt: {
    sortImports: {
      customGroups: [],
      groups: [
        "builtin",
        "external",
        ["internal", "subpath"],
        ["parent", "sibling", "index"],
        "style",
        "unknown",
      ],
      ignoreCase: false,
      internalPattern: ["@/"],
      newlinesBetween: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewline: false,
      // Reordering side-effect imports can change application behavior.
      sortSideEffects: false,
    },
    sortPackageJson: {
      sortScripts: true,
    },
    sortTailwindcss: {
      attributes: [],
      config: "./tailwind.config.js",
      functions: [],
      preserveDuplicates: false,
      preserveWhitespace: false,
    },
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    options: { typeAware: true, typeCheck: true },
    plugins: ["jsx-a11y"],
    rules: {
      "jsx-a11y/click-events-have-key-events": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
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
