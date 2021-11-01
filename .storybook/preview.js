const tokenContext = require.context(
  '!!raw-loader!../packages/tokens/src/stories',
  true,
  /.\.(css|less|scss|svg)$/,
)

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default }
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    disabled: true,
  },
  actions: {
    disabled: true,
  },
  options: {
    storySort: {
      order: [
        'Introduksjon',
        'Designsystem',
        ['Tokens', 'Komponenter', 'Maler', ['Introduksjon']],
      ],
    },
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  designToken: {
    files: tokenFiles,
  },
}
