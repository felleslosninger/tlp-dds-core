import React from 'react'
import { Story } from '@storybook/react'
import { NavigationCard, NavigationCardProps } from '../../../.'
import { Sun } from 'react-feather'

export default {
  title: 'Web/Navigation Card',
  component: NavigationCard,
  argTypes: {
    backgroundColor: {
      name: 'Background color',
      options: ['white', 'first', 'second', 'third'],
      defaultValue: 'second',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'second' },
      },
    },
    iconBackgroundColor: {
      name: 'Icon background color',
      options: ['None', 'first', 'second', 'third'],
      defaultValue: 'None',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<NavigationCardProps> = (args) => (
  <NavigationCard
    backgroundColor={args.backgroundColor}
    icon={args.icon}
    iconBackgroundColor={
      // @ts-ignore
      args.iconBackgroundColor !== 'None' ? args.iconBackgroundColor : undefined
    }
  />
)

export const navigationCard = Template.bind({})
navigationCard.args = {
  backgroundColor: 'second',
  icon: <Sun size={48}></Sun>,
}
