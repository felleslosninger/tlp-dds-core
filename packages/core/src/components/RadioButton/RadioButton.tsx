import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'

export interface RadioButtonProps {
  size: 'md' | 'lg'
}

const Label = styled.label<RadioButtonProps>(
  (props) => css`
    position: relative;
    padding-left: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: ${props.size === 'md' ? '16px' : '18px'};
    line-height: 24px;
    box-sizing: border-box;
    font-family: inherit;
    color: ${tokens.color.neutral.grey['800']};

    &:hover {
      ${Mark} {
        border-color: ${tokens.color.interface.interaction};
      }
    }

    ${props.size === 'lg' &&
    css`
      padding-left: 38px;
      line-height: 28px;
    `}

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      :checked ~ ${Mark} {
        border-color: ${tokens.color.interface.interaction};
      }

      :checked ~ ${Mark} ${Circle} {
        transform: scale(6);
        background-color: ${tokens.color.interface.interaction};

        ${props.size === 'lg' &&
        css`
          transform: scale(7);
        `}
      }
    }
  `,
)
const Mark = styled.div<RadioButtonProps>(
  (props) => css`
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: white;
    border: 2px solid ${tokens.color.neutral.grey['600']};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    ${props.size === 'lg' &&
    css`
      height: 28px;
      width: 28px;
    `}
  `,
)

const Circle = styled.div(
  () => css`
    height: 2px;
    width: 2px;
    transition: 0.3s all;
    background-color: white;
    border-radius: 50%;
    box-sizing: border-box;
  `,
)

export const RadioButton: FC<RadioButtonProps> = ({ size }) => {
  return (
    <Label size={size}>
      Her er ein radio knapp
      <input type="radio" name="raio" />
      <Mark size={size}>
        <Circle></Circle>
      </Mark>
    </Label>
  )
}
