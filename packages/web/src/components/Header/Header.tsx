import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { Container } from 'react-bootstrap'

export interface HeaderProps {}

const StyledHeader = styled.div(
  () => css`
    height: 88px;
    border-bottom: 1px solid ${tokens.color.neutral.grey['300']};
    display: flex;
    align-items: center;
  `,
)

const Logo = styled.img(
  () => css`
    height: 28px;
    width: auto;
  `,
)

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <StyledHeader>
      <Container>
        <Logo src="img/logo_sogn.svg" />
      </Container>
    </StyledHeader>
  )
}
