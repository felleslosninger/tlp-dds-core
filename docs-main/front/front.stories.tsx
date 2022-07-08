import React from 'react'
import { Landing } from './front'

export default {
  title: 'Templates/LandingPage',
  component: Landing,
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
}

const Template = () => <Landing />

export const LandingPage = Template.bind({})
