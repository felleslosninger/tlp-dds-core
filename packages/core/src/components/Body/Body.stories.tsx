import React from 'react'
import { Story } from '@storybook/react'
import { Body, BodyProps } from '../../../.'

export default {
  title: 'Core/Typography/Body',
  component: Body,
  argTypes: {
    size: {
      name: 'Font size',
      options: ['100', '200', '300', '400'],
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

const Template: Story<BodyProps> = (args) => <Body {...args}>Body text</Body>

export const body = Template.bind({})
body.args = {
  size: '400',
}
