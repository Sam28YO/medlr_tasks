import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Enable all rules from next/core-web-vitals
    ...compat.extends("next/core-web-vitals")[0],
  },
  {
    // Enable React recommended rules
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "error",
      "react/prop-types": "error",
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];

export default eslintConfig;
