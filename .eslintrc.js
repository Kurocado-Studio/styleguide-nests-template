module.exports = {
  extends: [require.resolve('@kurocado-studio/style-guide/eslint/node')],
  parserOptions: {
    ecmaVersion: 2020,
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  env: {
    amd: true,
    node: true,
  },
  overrides: [
    {
      files: ['src/**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-member-access': 'error',
      },
    },
  ],
};
