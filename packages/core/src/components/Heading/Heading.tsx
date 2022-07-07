import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { SpacingTypes, getSpacing } from '../../utils/Spacing'

export interface HeadingProps {
  /*
   * HTML heading tag between 1 and 6
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6
  /*
   * 500: 20px --- 600: 24px --- 700: 28px --- 800: 32px --- 900: 36px
   */
  size?: '500' | '600' | '700' | '800' | '900'
  mt?: SpacingTypes
  mb?: SpacingTypes
  children?: React.ReactNode
  className?: string
}

const StyledHeading = styled.h1<HeadingProps>(
  (props) => css`
    font-weight: 500;
    margin: 0;

    ${props.size === '500' &&
    css`
      font-size: ${tokens.font.size['500']};
      line-height: ${tokens.font.line.height['20']};
    `}

    ${props.size === '600' &&
    css`
      font-size: ${tokens.font.size['600']};
      line-height: ${tokens.font.line.height['20']};
    `}

    ${props.size === '700' &&
    css`
      font-size: ${tokens.font.size['700']};
      line-height: ${tokens.font.line.height['20']};
    `}

    ${props.size === '800' &&
    css`
      font-size: ${tokens.font.size['800']};
      line-height: ${tokens.font.line.height['10']};
    `}

    ${props.size === '900' &&
    css`
      font-size: ${tokens.font.size['900']};
      line-height: ${tokens.font.line.height['10']};
    `}

    ${props.mt &&
    css`
      margin-top: ${getSpacing(props.mt)};
    `}

    ${props.mb &&
    css`
      margin-bottom: ${getSpacing(props.mb)};
    `}
  `,
)

export const Heading: FC<HeadingProps> = ({
  level = 1,
  size = '900',
  className,
  children,
  mt,
  mb,
}) => {
  return (
    <StyledHeading
      as={`h${level}` as 'h1'}
      level={level}
      size={size}
      className={className}
      mt={mt}
      mb={mb}
    >
      {children}
    </StyledHeading>
  )
}
