/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vuejsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno, presetIcons } from "unocss";
import { safelist } from "./safelist";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

const root = process.cwd();

export default defineConfig({
  // root: resolve(root,'./demo/esm'),
  plugins: [
    vue(),
    vuejsx(),
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        // ...custom presets
        presetIcons(),
      ],
      preprocess(matcher) {
        return matcher.startsWith("un-") ? matcher.slice(3) : undefined; // ignore
      },
      rules: [
        [/text-var\(([\s\S]*)\)$/, (match) => ({ color: `var(${match[1]})` })],
      ],
      safelist,
    }),
    Components({
      resolvers: [
        IconsResolver({
          extension: "jsx",
        }),
      ],
      include: [/\.[jt]sx?$/],
    }),
    Icons({ autoInstall: true }),
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "RojerUI",
      fileName: "rojer-ui",
      formats: ["es", "umd", "iife"],
    },
    cssCodeSplit: true,
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
