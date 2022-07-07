import customTheme from './customTheme.js'
import tokens from '../node_modules/@digdir/ds-tokens/build/tokens.js'
// Import assets available to all stories
import 'bootstrap/scss/bootstrap-grid.scss'
import './customStyling.scss'

export const parameters = {
  layout: 'centered',
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
        'Design Tokens',
        'Core components',
        'Web components',
        'Web',
        ['Kom i gang', 'Ikonsøk', 'Guidelines'],
        'Changelog',
        ['Design Tokens', 'Core components', 'Web components'],
      ],
    },
  },
  actions: {
    disabled: true,
  },
}
