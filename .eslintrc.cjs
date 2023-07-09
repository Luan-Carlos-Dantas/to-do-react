/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  globas: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react-refresh",
    "react",
    "testing-library",
    "prettier",
    "react-hooks",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/preffer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: "./",
        devDependencies: true,
      },
    ],
  },
};
