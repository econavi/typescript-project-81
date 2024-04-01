module.exports = {
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  rules: {},
  overrides: [
    {
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      files: ['*.ts'],
      rules: {},
    },
    {
      files: ['*.test.ts'],
      rules: {
        '@typescript-eslint/require-await': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'operator-linebreak': 'off',
      },
    },
  ],
};
