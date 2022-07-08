import React from 'react'
import { Story } from '@storybook/react'
import { Header, HeaderProps } from './Header'

export default {
  title: 'Web/Header',
  component: Header,
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
  },
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
}

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const header = Template.bind({})
header.args = {}
