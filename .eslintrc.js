module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
