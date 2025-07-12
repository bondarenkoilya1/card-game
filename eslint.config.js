import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

import pluginQuery from "@tanstack/eslint-plugin-query";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "**/dist/*",
      "**/node_modules/*",
      "**/.vite/*",
      "**/public/*",
      "**/.idea/*",
      "**/.vscode/*",
      "tsconfig.json",
      "jsconfig.json",
      "**/*.min.js",
      "**/*.map.js",
      "**/*.test.js",
      "**/*.test.ts",
      "**/*.spec.ts",
      "**/.env*"
    ]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        google: "readonly"
      }
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      "simple-import-sort": eslintPluginSimpleImportSort,
      ...pluginQuery.configs["flat/recommended"]
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^\\w"], // React-related packages
            ["^@"], // Imports starting with @
            ["App"],
            ["./styled", "^styled(/.*|$)"],
            ["src/router(/.*|$)"],
            ["src/themes(/.*|$)"],
            ["src/providers(/.*|$)"],
            ["src/pages(/.*|$)"],
            ["src/config(/.*|$)"],
            ["src/constants(/.*|$)"],
            ["src/data(/.*|$)"],
            ["src/components(/.*|$)"],
            ["src/layout(/.*|$)"],
            ["src/import\\s+type"],
            ["src/types", "src/types(/.*|$)"],
            ["src/utils(/.*|$)"],
            ["src/api(/.*|$)"],
            ["src/services(/.*|$)"],
            ["src/store(/.*|$)"],
            ["src/hooks(/.*|$)"],
            ["^\\u0000"], // Side-effect imports
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Parent imports
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], // Relative imports
            ["^.+\\.?(css)$"] // Style imports
          ]
        }
      ],
      "react/react-in-jsx-scope": "off"
    }
  },
  {
    files: ["*.ts"],
    rules: {
      "no-unused-vars": "off"
    }
  }
];
