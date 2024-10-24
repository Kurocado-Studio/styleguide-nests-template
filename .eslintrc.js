module.exports = {
  extends: [require.resolve('@kurocado-studio/styleguide/eslint/node')],
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
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
};
