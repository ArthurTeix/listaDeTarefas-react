import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
  },
  pluginReact.configs.flat.recommended,
]);
