import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { SpacingTypes, getSpacing } from '../../utils/Spacing'

export interface BodyProps {
  /*
   * 100: 12px --- 200: 14px --- 300: 16px --- 400: 18px
   */
  size?: '100' | '200' | '300' | '400'
  mt?: SpacingTypes
  mb?: SpacingTypes
  children?: React.ReactNode
  className?: string
}

const StyledBody = styled.p<BodyProps>(
  (props) => css`
    font-weight: 400;
    margin: 0;

    ${props.size === '100' &&
    css`
      font-size: ${tokens.font.size['100']};
      line-height: ${tokens.font.line.height['20']};
    `}

    ${props.size === '200' &&
    css`
      font-size: ${tokens.font.size['200']};
      line-height: ${tokens.font.line.height['30']};
    `}

    ${props.size === '300' &&
    css`
      font-size: ${tokens.font.size['300']};
      line-height: ${tokens.font.line.height['30']};
    `}

    ${props.size === '400' &&
    css`
      font-size: ${tokens.font.size['400']};
      line-height: ${tokens.font.line.height['30']};
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

export const Body: FC<BodyProps> = ({
  size = '400',
  className,
  children,
  mt,
  mb,
}) => {
  return (
    <StyledBody size={size} className={className} mt={mt} mb={mb}>
      {children}
    </StyledBody>
  )
}
