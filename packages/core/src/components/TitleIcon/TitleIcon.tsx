import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Heading } from '../Heading/Heading'
import { ArrowRight } from 'react-feather'
import tokens from '@digdir/ds-tokens/build/tokens'
import { SpacingTypes } from '../../utils/Spacing'

export interface TitleIconProps {
  subTitle?: string
  size?: '500' | '600' | '700'
  mt?: SpacingTypes
  mb?: SpacingTypes
  children: React.ReactNode
}

interface TestProps {
  size?: '500' | '600' | '700'
}

const S = {
  Heading: styled(Heading)(
    (props) => css`
      svg {
        margin-left: ${tokens.Spacing1};
        margin-bottom: -4px;
        height: 26px;
        width: 26px;
      }

      ${props.size === '500' &&
      css`
        svg {
          margin-bottom: -3px;
          height: 22px;
          width: 22px;
        }
      `}

      ${props.size === '700' &&
      css`
        svg {
          margin-bottom: -5px;
          height: 30px;
          width: 30px;
        }
      `}
    `,
  ),
}

const Container = styled.span`
  vertical-align: center;
`

const SubTitle = styled.span<TestProps>(
  (props) => css`
    font-size: ${tokens.FontSize500};
    display: block;
    margin-bottom: ${tokens.Spacing1};
    font-weight: 400;

    ${props.size === '500' &&
    css`
      font-size: ${tokens.FontSize400};
    `}

    ${props.size === '700' &&
    css`
      font-size: ${tokens.FontSize600};
    `}
  `,
)

export const TitleIcon: FC<TitleIconProps> = ({
  children,
  subTitle,
  size,
  mt,
  mb,
}) => {
  return (
    <S.Heading size={size} mt={mt} mb={mb}>
      {subTitle && <SubTitle size={size}>{subTitle}</SubTitle>}
      <Container>
        {children}
        <ArrowRight />
      </Container>
    </S.Heading>
  )
}
