import React, { FC } from 'react'
import tokens from '@digdir/ds-tokens/build/tokens'
import styled, { css } from 'styled-components'
import { Interface } from '../Interface/Interface'

export interface ButtonProps {
  fontSize?: '16px' | '18px'
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const StyldButton = styled.button<ButtonProps>(
  (props) => css`
    background-color: ${tokens.color.neutral.grey['800']};
    border: 2px solid ${tokens.color.neutral.grey['800']};
    color: white;
    height: 48px;
    padding: 0 24px;
    border-radius: 56px;
    cursor: pointer;
    transition: ${tokens.duration.fast};

    &:hover {
      background-color: ${tokens.color.brand.third['200']};
      color: ${tokens.color.neutral.grey['800']};
    }

    &:active {
      background-color: ${tokens.color.brand.third['300']};
    }

    ${props.size === 'sm' &&
    css`
      padding: 0 20px;
      height: 40px;
    `}

    ${props.size === 'lg' &&
    css`
      padding: 0 32px;
      height: 56px;
    `}

    ${props.variant === 'secondary' &&
    css`
      color: ${tokens.color.neutral.grey['800']};
      background-color: white;
    `}
  `,
)

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  fontSize,
  children,
}) => {
  return (
    <StyldButton variant={variant} fontSize={fontSize} size={size}>
      <Interface size={fontSize === '16px' ? '300' : '400'}>
        {children}
      </Interface>
    </StyldButton>
  )
}
