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
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Generelt',
        ['Introduksjon', 'Tokens', 'Typografi'],
        'Komponenter',
        ['Introduksjon', 'Button', 'Checkbox'],
        'Maler',
      ],
    },
  },
  actions: {
    disabled: true,
  },
  designToken: {
    files: tokenFiles,
  },
}
