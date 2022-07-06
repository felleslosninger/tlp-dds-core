import React from 'react'
import { Story } from '@storybook/react'
import { TeaserCard } from '../../../dist'

export default {
  title: 'Web/Teaser Card',
  component: TeaserCard,
  argTypes: {
    title: {
      name: 'Title',
      description: 'The title of the card.',
      control: { type: 'text' },
    },
    imageSrc: {
      table: {
        disable: true,
      },
    },
    subTitle: {
      name: 'Subtitle',
      description: 'The subtitle of the card.',
      control: { type: 'text' },
    },
    image: {
      name: 'Show image',
      description: 'Shows a placeholder image with the imageSrc prop.',
      control: { type: 'boolean' },
    },
    backgroundColor: {
      name: 'Background color',
      options: ['white', 'red', 'blue', 'yellow'],
      control: { type: 'select' },
      defaultValue: 'white',
      table: {
        defaultValue: { summary: 'white' },
      },
    },
    metaItems: {
      name: 'Meta items',
      description:
        'Adds text under the title. Often use cases: Dates, comment count.',
      options: [],
      control: { type: 'array' },
    },
    direction: {
      name: 'Direction',
      description: 'Set the direction of the image and text container.',
      options: ['vertical', 'horizontal'],
      defaultValue: 'vertical',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'vertical' },
      },
    },
    colorDetail: {
      name: 'Color detail',
      description: 'Adds a color detail to the top left of the card.',
      options: ['None', 'red', 'yellow', 'blue'],
      defaultValue: 'None',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

const Template: Story = (args) => (
  <TeaserCard
    imageSrc={args.image ? 'img/png/five.jpg' : ''}
    metaItems={args.metaItems}
    colorDetail={args.colorDetail === 'None' ? '' : args.colorDetail}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  imageSrc: 'img/png/five.jpg',
  metaItems: ['21. mar 2021'],
}
