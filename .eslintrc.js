module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    'react/prop-types': 0,
    'react/destructuring-assignment': 1,
    'react/static-property-placement': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};