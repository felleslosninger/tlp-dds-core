import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { SpacingTypes, getSpacing } from '../../utils/Spacing'

export interface InterfaceProps {
  /*
   * 500: 20px --- 600: 24px
   */
  size?: '200' | '300' | '400'
  mt?: SpacingTypes
  mb?: SpacingTypes
  children?: React.ReactNode
  className?: string
}

const StyledInterface = styled.div<InterfaceProps>(
  (props) => css`
    font-weight: 500;
    margin: 0;
    font-size: ${tokens.font.size['400']};
    line-height: ${tokens.font.line.height['10']};

    ${props.size === '200' &&
    css`
      font-size: ${tokens.font.size['200']};
    `}

    ${props.size === '300' &&
    css`
      font-size: ${tokens.font.size['300']};
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

export const Interface: FC<InterfaceProps> = ({
  size = '400',
  className,
  children,
  mt,
  mb,
}) => {
  return (
    <StyledInterface size={size} className={className} mt={mt} mb={mb}>
      {children}
    </StyledInterface>
  )
}
