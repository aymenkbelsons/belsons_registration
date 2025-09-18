import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // turn off "unused vars" blocking builds
      "@typescript-eslint/no-unused-vars": "off",

      // silence font warnings in your email components
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
