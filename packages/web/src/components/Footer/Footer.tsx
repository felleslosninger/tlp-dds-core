import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'

export interface FooterProps {}

const StyledFooter = styled.footer(
  () => css`
    background-color: ${tokens.color.neutral.grey['800']};
    height: 400px;
  `,
)

export const Footer: FC<FooterProps> = ({}) => {
  return <StyledFooter></StyledFooter>
}
