// https://docs.expo.dev/guides/using-eslint/
//https://docs.expo.dev/guides/using-eslint/
//https://github.com/expo/expo/tree/main/packages/eslint-config-universe#customizing-prettier
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
