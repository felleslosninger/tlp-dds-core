import React from 'react'
import { Story } from '@storybook/react'
import { Input, InputProps } from './Input'

export default {
  title: 'Core/Input',
  component: Input,
  argTypes: {
    size: {
      name: 'Size',
      options: ['md', 'lg'],
      defaultValue: 'md',
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

const Template: Story<InputProps> = (args) => <Input {...args} />

export const input = Template.bind({})
input.args = {
  label: 'Input field',
}
