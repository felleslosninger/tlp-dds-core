import React from 'react'
import { Story } from '@storybook/react'
import { Ingress, IngressProps } from '../../../.'

export default {
  title: 'Core/Typography/Ingress',
  component: Ingress,
  argTypes: {
    size: {
      name: 'Font size',
      options: ['500', '600'],
      control: { type: 'select' },
      description: 'Font size',
      table: {
        defaultValue: { summary: '600' },
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

const Template: Story<IngressProps> = (args) => (
  <Ingress {...args}>Ingress text</Ingress>
)

export const ingress = Template.bind({})
ingress.args = {
  size: '600',
}
