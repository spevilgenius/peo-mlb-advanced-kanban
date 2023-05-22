/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  globals: {
    SP: 'readonly'
  },
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-inner-declarations': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'prefer-const': [
      'off',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'no-var': [
      'off',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'no-use-before-define': [
      'off',
      {
        functions: false,
        classes: false
      }
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        doubleQuote: false,
        semi: false,
        trailingComma: 'none',
        code: 400,
        printWidth: 400,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
}
