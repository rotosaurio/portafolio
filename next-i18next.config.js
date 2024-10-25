// Cambiar de ES Modules a CommonJS
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  localePath: typeof window === 'undefined' 
    ? require('path').resolve('./public/locales') 
    : '/locales'
}
