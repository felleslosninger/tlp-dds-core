import customTheme from './customTheme.js'
// Import assets available to all stories
import '../packages/css/src/index.scss'
import '../packages/components/src/index.js'

// Parsing configuration for design-token storybook addon
const tokenContext = require.context(
  '!!raw-loader!../packages/tokens/src/stories',
  true,
  /.\.(css|less|scss|svg)$/,
)
const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default }
})

export const parameters = {
  docs: {
    theme: customTheme,
  },
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
        ['Tokens', 'Typografi', 'Komponenter', 'Maler', ['Introduksjon']],
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
