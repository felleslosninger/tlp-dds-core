import React from 'react'
import { Story } from '@storybook/react'
import { NavigationCard, NavigationCardProps } from '../../../dist'
import { Sun } from 'react-feather'

export default {
  title: 'Web/Navigation Card',
  component: NavigationCard,
  argTypes: {
    backgroundColor: {
      options: ['white', 'yellow'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<NavigationCardProps> = (args) => (
  <NavigationCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: 'yellow',
  icon: <Sun size={48}></Sun>,
}
