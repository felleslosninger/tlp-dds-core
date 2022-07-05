import React from 'react'
import { Story } from '@storybook/react'
import { Section, SectionProps } from '../../../dist'

export default {
  title: 'Web/Section',
  component: Section,
  argTypes: {
    backgroundColor: {
      options: ['white', 'grey'],
      control: { type: 'radio' },
    },
    lineColor: {
      options: ['grey', 'yellow', 'red', 'blue'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<SectionProps> = (args) => <Section {...args} />

export const Primary = Template.bind({})
Primary.args = {
  lineColor: 'red',
}
