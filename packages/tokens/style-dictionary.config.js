module.exports = {
  format: {
    customFormat: function ({ dictionary, options }) {
      return dictionary.allTokens
        .map((token) => {
          let value = JSON.stringify(token.value)
          if (options.outputReferences) {
            if (dictionary.usesReference(token.original.value)) {
              const refs = dictionary.getReferences(token.original.value)
              refs.forEach((ref) => {
                value = value.replace(ref.value, function () {
                  return `${ref.name}`
                })
              })
            }
          }

          return `export const ${token.name} = ${value};`
        })
        .join(`\n`)
    },
  },

  source: ['src/tokens.json'],
  platforms: {
    json: {
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
    js: {
      buildPath: 'build/',
      transformGroup: 'js',
      files: [
        {
          destination: 'tokens.js',
          format: 'customFormat',
          options: {
            outputReferences: true,
          },
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
          options: { outputReferences: true },
        },
      ],
    },
  },
}
