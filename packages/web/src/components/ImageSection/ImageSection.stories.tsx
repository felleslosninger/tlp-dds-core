import React from 'react'
import { Story } from '@storybook/react'
import { ImageSection, ImageSectionProps } from '../../../.'

export default {
  title: 'Web/ImageSection',
  component: ImageSection,
  argTypes: {
    imgDirection: {
      name: 'Background color',
      options: ['left', 'right'],
      defaultValue: 'left',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'padding',
  },
}

const Template: Story<ImageSectionProps> = (args) => <ImageSection {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Her finner du Stifinneren',
  desc: 'Behovskatalogen kan du melde inn ditt eget behov, se hva andre har meldt inn, kommentere på andres bidrag og diskutere behovene med andre i Datalandsbyen. Ved å abonnere på oppdateringer kan du følge med på hva som skjer med behovet.',
  linkText: 'Les mer om stifinneren',
  imgDirection: 'left',
  imgPath: 'img/png/six.jpg',
}
