import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { RadioButtonProps } from '../RadioButton/RadioButton'
import tokens from '@digdir/ds-tokens/build/tokens'

export interface CheckboxProps {
  size: 'md' | 'lg'
}

const Label = styled.label<RadioButtonProps>(
  (props) => css`
    position: relative;
    padding-left: 34px;
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

      :checked ~ ${Mark} svg {
        path {
          animation: strokeIn 0.4s forwards;
        }
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
    border-radius: ${tokens.border.radius['x-small']};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    svg {
      stroke-width: 4;
      stroke-miterlimit: 10;
      height: 24px;
      width: 24px;
      stroke: ${tokens.color.interface.interaction};

      path {
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        transform: scale(2);
        transform-origin: 22% 22%;
        animation: strokeOut 0.3s forwards;

        @keyframes strokeIn {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes strokeOut {
          0% {
            stroke-dashoffset: 0;
          }
        }
      }
    }

    ${props.size === 'lg' &&
    css`
      height: 28px;
      width: 28px;

      svg {
        stroke-width: 4;
      }
    `}
  `,
)

export const Checkbox: FC<CheckboxProps> = ({ size }) => {
  return (
    <Label size={size}>
      Her er ein checkbox
      <input type="checkbox" name="check" />
      <Mark size={size}>
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 72"
        >
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          ></path>
        </svg>
      </Mark>
    </Label>
  )
}
