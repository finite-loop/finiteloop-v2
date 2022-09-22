module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    "babelOptions": {
      "configFile": "./.babelrc"
    }
    requireConfigFile: false,
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  rules: {
    "react/prop-types": "off",
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
