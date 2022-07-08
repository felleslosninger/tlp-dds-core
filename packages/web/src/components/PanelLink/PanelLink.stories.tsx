import React from 'react'
import { Story } from '@storybook/react'
import { PanelLink, PanelLinkProps } from './PanelLink'

export default {
  title: 'Web/PanelLink',
  component: PanelLink,
  argTypes: {
    color: {
      name: 'Color',
      options: ['first', 'second', 'third'],
      defaultValue: 'first',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'first' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<PanelLinkProps> = (args) => (
  <PanelLink {...args} children={args.children} />
)

export const panelLink = Template.bind({})
panelLink.args = {
  children: 'Her er ei panel lenke',
  color: 'first',
}
