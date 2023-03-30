require("@rushstack/eslint-patch/modern-module-resolution")

const vue = require("eslint-plugin-vue");

module.exports = {
  env: { es2021: true, node: true },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-standard-with-typescript',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: [
    'simple-import-sort',
    'import',
    '@typescript-eslint'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  root: true,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [".ts"]
    },
    'import/resolver': {
      'typescript': true,
      'node': true
    }
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error'
  }
}
