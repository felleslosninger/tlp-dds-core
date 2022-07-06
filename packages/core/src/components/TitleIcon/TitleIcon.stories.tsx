import React from 'react'
import { Story } from '@storybook/react'
import { TitleIcon, TitleIconProps } from '../../../.'

export default {
  title: 'Core/TitleIcon',
  component: TitleIcon,
  argTypes: {
    size: {
      name: 'Font size',
      options: ['500', '600', '700'],
      control: { type: 'select' },
      description: 'Font size',
      table: {
        defaultValue: { summary: '600' },
      },
    },
    subTitle: {
      name: 'Subtitle',
      control: { type: 'text' },
      description: 'Subtitle',
      table: {
        defaultValue: { summary: 'None' },
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

const Template: Story<TitleIconProps> = (args) => (
  <TitleIcon {...args}>Here is some title text</TitleIcon>
)
const Template2: Story<TitleIconProps> = (args) => (
  <TitleIcon {...args}>
    Here is some long text for the title icon component so we can see how it
    looks on multiple lines of text
  </TitleIcon>
)

export const SingleLine = Template.bind({})
SingleLine.args = {
  size: '600',
}

export const MultiLine = Template2.bind({})
MultiLine.args = {
  size: '600',
}

export const WithSubtitle = Template.bind({})
WithSubtitle.args = {
  size: '500',
  subTitle: 'Here is a subtitle',
}
