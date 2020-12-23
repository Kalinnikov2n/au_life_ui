const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['public/**/*.html', './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
    defaultExtractor: (content) => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    },
    whitelistPatterns: [
      /(theme)[A-Za-z0-9-_:/]+/g,
      /(text)[0-9-_:/]+/gim,
      /(text-11)/gim,
      /(text-13)/gim,
      /(text-11)/gim,
      /(text-15)/gim,
    ],
    whitelistPatternsChildren: [/infsFrame$/, /editorsFilter$/],
  })
  module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-advanced-variables'),
      require('tailwindcss')(`./tailwind/tailwind.config.js`),
      require('postcss-nested'),
      process.env.NODE_ENV === 'production' ? require('autoprefixer') : '',
      process.env.NODE_ENV === 'production' ? purgecss : '',
    ],
  }
  