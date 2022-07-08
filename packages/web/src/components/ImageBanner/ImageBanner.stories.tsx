import React from 'react'
import { Story } from '@storybook/react'
import { ImageBanner, ImageBannerProps } from './ImageBanner'

export default {
  title: 'Web/ImageBanner',
  component: ImageBanner,
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
  },
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
}

const Template: Story<ImageBannerProps> = (args) => <ImageBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Sammenhengende tjenester',
  desc: 'Godt samarbeid og god organisering er veien til sammenhengende, sømløse digitale tjenester. Livshendelser setter brukerens behov i sentrum når vi lager sammenhengende tjenester.',
  imgPath: 'img/svg/one.svg',
  breadcrumbs: [{ text: 'dd', url: '#' }],
}
