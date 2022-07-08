import React from 'react'
import { Story } from '@storybook/react'
import { Section, SectionProps } from '../../../.'

export default {
  title: 'Web/Section',
  component: Section,
  argTypes: {
    backgroundColor: {
      name: 'Background color',
      options: ['white', 'grey'],
      defaultValue: 'grey',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'grey' },
      },
    },
    lineColor: {
      name: 'Line color',
      description: 'The color of the line that appears under the title.',
      options: ['grey', 'first', 'second', 'third'],
      defaultValue: 'grey',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'grey' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<SectionProps> = (args) => <Section {...args} />

export const section = Template.bind({})
section.args = {
  lineColor: 'grey',
}
