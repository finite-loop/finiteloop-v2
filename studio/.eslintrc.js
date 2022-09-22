module.exports = {
  extends: ["standard", "standard-react"],
  parser: "@babel/preset-react",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    }
    requireConfigFile: false,
  },
  rules: {
    "react/prop-types": 0,
    "object-curly-spacing": ["error", "never"]
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};
