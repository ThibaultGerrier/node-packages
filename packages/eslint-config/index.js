module.exports = {
    root: true,
    env: {
      es2021: true,
      node: true,
      jest: true,
      'jest/globals': true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.js'],
    plugins: ['@typescript-eslint/eslint-plugin', 'sonarjs', 'jest', 'prettier'],
    extends: [
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:sonarjs/recommended',
      'plugin:jest/all',
    ],
    rules: {
      'prettier/prettier': 'off', // otherwise will get lots of small prettier errors
      // to not make typescript too strict:
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
  
      'jest/no-hooks': 'off',
      'jest/prefer-expect-assertions': 'off',
      'jest/lowercase-name': 'off',
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'max-classes-per-file': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'no-restricted-syntax': 'off',
      'new-cap': 'off',
      'no-underscore-dangle': 'off',
      'guard-for-in': 'off',
    },
  };
  