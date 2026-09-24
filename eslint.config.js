import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "dist/**",
      "storybook-static/**",
      "node_modules/**",
    ],
  },

  {
    files: [
      "**/*.{ts,tsx}",
    ],

    languageOptions: {
      parser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        sourceType: "module",
      },
    },

    plugins: {
      "@typescript-eslint": tseslint,
    },

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];