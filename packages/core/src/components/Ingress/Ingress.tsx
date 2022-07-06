import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { SpacingTypes, getSpacing } from '../../utils/Spacing'

export interface IngressProps {
  /*
   * 500: 20px --- 600: 24px
   */
  size?: '500' | '600'
  mt?: SpacingTypes
  mb?: SpacingTypes
  children?: React.ReactNode
  className?: string
}

const StyledIngress = styled.p<IngressProps>(
  (props) => css`
    font-weight: 400;
    margin: 0;
    font-size: ${tokens.FontSize600};
    line-height: ${tokens.FontLineHeight40};

    ${props.size === '500' &&
    css`
      font-size: ${tokens.FontSize500};
      line-height: ${tokens.FontLineHeight30};
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

export const Ingress: FC<IngressProps> = ({
  size = '600',
  className,
  children,
  mt,
  mb,
}) => {
  return (
    <StyledIngress size={size} className={className} mt={mt} mb={mb}>
      {children}
    </StyledIngress>
  )
}
