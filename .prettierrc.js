export default {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  semi: false,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
  printWidth: 100,
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.scss', '*.css'],
      options: {
        parser: 'scss',
      },
    },
    {
      files: ['*.json', '*.json5'],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['*.vue'],
      options: {
        parser: 'vue',
      },
    },
  ],
}
