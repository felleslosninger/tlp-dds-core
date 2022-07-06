import React from 'react'
import { Story } from '@storybook/react'
import { Heading, HeadingProps } from '../../../.'

export default {
  title: 'Core/Typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      name: 'Font size',
      options: ['500', '600', '700', '800', '900'],
      control: { type: 'select' },
      description: 'Font size',
      table: {
        defaultValue: { summary: '900' },
      },
    },
    level: {
      name: 'HTML Heading tag',
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
      description: 'HTML Heading tag',
      table: {
        defaultValue: { summary: '1' },
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

const Template: Story<HeadingProps> = (args) => (
  <Heading {...args}>Heading text</Heading>
)

export const heading = Template.bind({})
heading.args = {
  size: '900',
  level: 1,
}
