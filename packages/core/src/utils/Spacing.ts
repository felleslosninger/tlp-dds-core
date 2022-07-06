import tokens from '@digdir/ds-tokens/build/tokens'

export type SpacingTypes = 1 | 2 | 3 | 4 | 5 | 6

export const getSpacing = (spacing: number) => {
  switch (spacing) {
    case 1:
      return tokens.Spacing1
    case 2:
      return tokens.Spacing2
    case 3:
      return tokens.Spacing3
    case 4:
      return tokens.Spacing4
    case 5:
      return tokens.Spacing5
    case 6:
      return tokens.Spacing6
    default:
      return '0px'
  }
}
