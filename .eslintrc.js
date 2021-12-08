module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    // Remove duplicate configurations
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // For tsx
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],

    // This is unnecessary
    'react/function-component-definition': ['off'],

    /**
     * New JSX Transform
     * See: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
}
