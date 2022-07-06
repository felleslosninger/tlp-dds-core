import { create } from '@storybook/theming'
import logo from './assets/logo_digdir.svg'
import tokens from '../node_modules/@digdir/ds-tokens/build/tokens.js'

export default create({
  brandTitle: 'DigDir design system',
  brandUrl: 'https://profilveileder.digdir.no/',
  brandImage: logo,
  fontBase: '"Inter", sans-serif',
  // Colors
  base: 'light',
  colorSecondary: tokens.ColorBrandThird800,
  appBg: tokens.ColorNeutralGrey100,
  textColor: tokens.ColorTextBackgroundLight,
})
