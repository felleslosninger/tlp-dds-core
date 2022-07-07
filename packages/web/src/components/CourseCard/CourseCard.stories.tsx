import React from 'react'
import { Story } from '@storybook/react'
import { CourseCard, CourseCardProps } from '../../../dist'

export default {
  title: 'Web/Course Card',
  component: CourseCard,
  argTypes: {
    title: {
      name: 'Title',
      description: 'The title of the card.',
    },
    color: {
      name: 'Color',
      description: 'Choose the brand color.',
      options: ['first', 'second', 'third'],
      control: { type: 'select' },
      defaultValue: 'second',
      table: {
        defaultValue: { summary: 'second' },
      },
    },
    tags: {
      name: 'Tags',
      description: 'Add a list og tags.',
      options: [],
      control: { type: 'array' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<CourseCardProps> = (args) => <CourseCard {...args} />

export const courseCard = Template.bind({})
courseCard.args = {
  title: 'Here is the title of the course card',
  time: '09:45',
  place: 'Arendal',
  tags: ['Digitalisering og samordning'],
}
