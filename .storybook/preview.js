import customTheme from './customTheme.js'
// Import assets available to all stories
import '../packages/css/src/index.scss'
import '../packages/components/src/index.js'
// import './customStyling.scss'

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
        'Introduksjon',
        'Tokens',
        'Admin',
        [
          'Introduksjon',
          'Typografi',
          'Komponenter',
          ['Button', 'Checkbox', 'Radio'],
          'Maler',
        ],
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
