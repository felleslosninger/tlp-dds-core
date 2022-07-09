import React from 'react'
import { Story } from '@storybook/react'
import { Link } from './Link'

export default {
  title: 'Core/Link',
  component: Link,
  argTypes: {
    text: {
      name: 'Text',
      control: { type: 'text' },
    },
    size: {
      name: 'Font size',
      control: { type: 'select' },
      options: ['300', '400'],
      defaultValue: '400',
      table: {
        defaultValue: { summary: '400' },
      },
    },
    type: {
      name: 'Type',
      control: { type: 'select' },
      options: ['inline', 'shortcut', 'regular', 'external'],
      defaultValue: 'inline',
      table: {
        defaultValue: { summary: 'inline' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

interface StoryProps {
  text: string
  size?: '300' | '400'
  href: string
  type?: 'inline' | 'shortcut' | 'regular' | 'external'
}

const Template: Story<StoryProps> = (args) => (
  <Link size={args.size} type={args.type} href={args.href}>
    {args.text}
  </Link>
)

export const inline = Template.bind({})
inline.args = {
  text: 'Here is a link text',
  size: '400',
  type: 'inline',
  href: '#',
}

export const shortcut = Template.bind({})
shortcut.args = {
  text: 'Here is a link text',
  size: '400',
  type: 'shortcut',
  href: '#',
}

export const regular = Template.bind({})
regular.args = {
  text: 'Here is a link text',
  size: '400',
  type: 'regular',
  href: '#',
}

export const external = Template.bind({})
external.args = {
  text: 'Here is a link text',
  size: '400',
  type: 'external',
  href: '#',
}
