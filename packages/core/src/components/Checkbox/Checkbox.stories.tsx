import React from 'react'
import { Story } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Core/Checkbox',
  component: Checkbox,
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

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const checkbox = Template.bind({})
checkbox.args = {}
