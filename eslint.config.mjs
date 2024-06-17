import globals from "globals";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    ignores: ["coverage/**", "node_modules/**"],
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      jest: jestPlugin
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];