module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  globals: {
    document: 'readonly',
    window: 'readonly',
    KeyboardEvent: 'readonly',
  },
};
