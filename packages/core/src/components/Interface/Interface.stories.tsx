import React from 'react'
import { Story } from '@storybook/react'
import { Interface, InterfaceProps } from '../../../.'

export default {
  title: 'Core/Typography/InterFace',
  component: Interface,
  argTypes: {
    size: {
      name: 'Font size',
      options: ['200', '300', '400'],
      control: { type: 'select' },
      description: 'Font size',
      table: {
        defaultValue: { summary: '400' },
      },
    },
    mt: {
      name: 'Margin top',
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
      description: 'Margin top',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    mb: {
      name: 'Margin bottom',
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
      description: 'Margin bottom',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<InterfaceProps> = (args) => (
  <Interface {...args}>Interface text</Interface>
)

export const InterFace = Template.bind({})
InterFace.args = {
  size: '400',
}
