import React from 'react'
import { Story } from '@storybook/react'
import { RadioButton, RadioButtonProps } from './RadioButton'

export default {
  title: 'Core/RadioButton',
  component: RadioButton,
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

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />

export const radioButton = Template.bind({})
radioButton.args = {}
