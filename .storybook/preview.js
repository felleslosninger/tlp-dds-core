import customTheme from './customTheme.js'
import tokens from '../node_modules/@digdir/ds-tokens/build/tokens.js'
// Import assets available to all stories
import '../packages/css/src/index.scss'
import './customStyling.scss'

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
  backgrounds: {
    values: [
      {
        name: 'grey-100',
        value: tokens.color.neutral.grey['100'],
      },
      {
        name: 'grey-200',
        value: tokens.color.neutral.grey['200'],
      },
    ],
  },
  options: {
    storySort: {
      order: [
        'Introduksjon',
        'Tokens',
        'Typografi',
        'Komponenter',
        [
          'Introduksjon',
          'Button',
          'Checkbox',
          'Radio',
          'Link',
          'Icon-link',
          'Panel-link',
          'Input-field',
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
