import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'

export interface InputProps {
  size?: 'md' | 'lg'
  label: string
}
interface InputFieldProps {
  inputSize?: 'md' | 'lg'
}

const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    label {
      margin-bottom: 8px;
      line-height: 1.5em;
    }
  `,
)
const InputField = styled.input<InputFieldProps>(
  (props) => css`
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${tokens.color.neutral.grey['600']};
    font-family: inherit;
    font-size: 16px;
    padding: 0 16px;

    &:focus {
      box-shadow: 0 0 0 1px ${tokens.color.interface.interaction};
      border-color: ${tokens.color.interface.interaction};
      outline: none;
    }

    ${props.inputSize === 'lg' &&
    css`
      height: 56px;
      padding: 0 20px;
      font-size: 18px;
    `}
  `,
)
const Label = styled.label(() => css``)

export const Input: FC<InputProps> = ({ size, label }) => {
  return (
    <Container>
      <Label htmlFor="input">{label}</Label>
      <InputField
        id="input"
        type="text"
        placeholder="Name here"
        inputSize={size}
      ></InputField>
    </Container>
  )
}
