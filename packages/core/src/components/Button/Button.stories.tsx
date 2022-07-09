import React from 'react'
import { Story } from '@storybook/react'
import { Button, ButtonProps } from '../Button/Button'

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    variant: {
      name: 'Variant',
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      name: 'Size',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click here</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'md',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'md',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  size: 'md',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  size: 'md',
}
