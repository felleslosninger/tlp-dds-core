import React from 'react'
import { Story } from '@storybook/react'
import { Button, ButtonProps } from '../../../.'

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    variant: {
      Name: 'Variant',
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      Name: 'Size',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    fontSize: {
      Name: 'Font size',
      options: ['16px', '18px'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: '16px' },
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
  fontSize: '16px',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  fontSize: '16px',
}
