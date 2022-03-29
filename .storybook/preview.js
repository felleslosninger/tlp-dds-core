import customTheme from './customTheme.js'
import tokens from '../node_modules/@digdir/ds-tokens/build/tokens.js'
// Import assets available to all stories
import '../packages/css/src/index.scss'
import './customStyling.scss'

export const parameters = {
  docs: {
    theme: customTheme,
  },
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
          'Kom i gang',
          'Button',
          'Checkbox',
          'Radio',
          'Toggle',
          'Link',
          'Icon-link',
          'Panel-link',
          'Input-field',
        ],
        'Changelog',
        ['Tokens', 'Core CSS'],
      ],
    },
  },
  actions: {
    disabled: true,
  },
}
