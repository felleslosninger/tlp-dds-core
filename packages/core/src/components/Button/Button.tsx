import React, { FC } from 'react'
import tokens from '@digdir/ds-tokens/build/tokens'
import styled, { css } from 'styled-components'
import { Interface } from '../Interface/Interface'

export interface ButtonProps {
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
    padding: 0 32px;
    border-radius: 56px;
    cursor: pointer;
    transition: ${tokens.duration.fast};
    width: auto;
    font-family: inherit;

    &:hover {
      background-color: ${tokens.color.brand.third['200']};
      color: ${tokens.color.neutral.grey['800']};
    }

    &:active {
      background-color: ${tokens.color.brand.third['300']};
    }

    ${props.size === 'sm' &&
    css`
      padding: 0 24px;
      height: 40px;
    `}

    ${props.size === 'lg' &&
    css`
      padding: 0 40px;
      height: 56px;
    `}

    ${props.variant === 'secondary' &&
    css`
      color: ${tokens.color.neutral.grey['800']};
      background-color: white;
    `}
  `,
)

export const Button: FC<ButtonProps> = ({ variant, size, children }) => {
  return (
    <StyldButton variant={variant} size={size}>
      <Interface size={size === 'lg' ? '400' : '300'}>{children}</Interface>
    </StyldButton>
  )
}
