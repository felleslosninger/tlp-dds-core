import React from 'react'
import { Story } from '@storybook/react'
import { TeaserCard, TeaserCardProps } from '../../../dist'

export default {
  title: 'Web/Teaser Card',
  component: TeaserCard,
  argTypes: {
    backgroundColor: {
      options: ['white', 'blue'],
      control: { type: 'radio' },
    },
    alignment: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story<TeaserCardProps> = (args) => <TeaserCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  imageSrc: 'img/png/five.jpg',
}
