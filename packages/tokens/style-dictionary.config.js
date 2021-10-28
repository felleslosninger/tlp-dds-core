const StyleDictionary = require('style-dictionary')
const { minifyDictionary } = StyleDictionary.formatHelpers

module.exports = {
  format: {
    customCjsMinified({ dictionary }) {
      return (
        'module.exports=' +
        JSON.stringify(minifyDictionary(dictionary.tokens), null) +
        ';'
      )
    },
    customEs6Minified({ dictionary }) {
      return (
        'export default ' +
        JSON.stringify(minifyDictionary(dictionary.tokens)) +
        ';'
      )
    },
  },
  source: ['src/**.tokens.json'],
  platforms: {
    js: {
      buildPath: 'build/',
      transformGroup: 'js',
      files: [
        {
          destination: 'tokens.cjs',
          format: 'customCjsMinified',
        },
        {
          destination: 'tokens.js',
          format: 'customEs6Minified',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
}
