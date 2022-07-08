import React from 'react'
import { Story } from '@storybook/react'
import { Footer, FooterProps } from './Footer'

export default {
  title: 'Web/Footer',
  component: Footer,
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

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const footer = Template.bind({})
footer.args = {}
