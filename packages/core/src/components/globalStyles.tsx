import { createGlobalStyle } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    color: ${tokens.color.neutral.grey['800']};
  }
`
