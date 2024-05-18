import { defineConfig } from "tsup"
import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions"

export default defineConfig({
  entry: ["src/index.ts"],

  bundle: false,
  platform: "browser",
  target: "node18",
  format: ["esm", "cjs"],

  clean: true,
  minify: false,
  sourcemap: true,

  esbuildPlugins: [esbuildPluginFilePathExtensions()],

  esbuildOptions: (options) => {
    options.supported = {
      // For better performance: https://github.com/evanw/esbuild/issues/951
      "object-rest-spread": false,
    }
  },
})
