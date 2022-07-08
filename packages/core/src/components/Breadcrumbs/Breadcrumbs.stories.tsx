import React from 'react'
import { Story } from '@storybook/react'
import { Breadcrumbs, BreadcrumbsProps } from '../Breadcrumbs/Breadcrumbs'

export default {
  title: 'Core/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    linkList: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />

export const breadcrumbs = Template.bind({})
breadcrumbs.args = {
  linkList: [
    { text: 'Hjem', url: '#' },
    { text: 'Sammenhengende tjenester', url: '#' },
    { text: 'Viktige lenker', url: '#' },
  ],
}
