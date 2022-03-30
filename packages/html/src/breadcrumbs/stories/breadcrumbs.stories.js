import { createBreadcrumbs } from '../breadcrumbs.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Breadcrumbs',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=4490%3A19550',
    },
  },
  argTypes: {
    depth: {
      control: { type: 'range', min: 1, max: 8, step: 1 },
    },
  },
}

const Template = (args) => {
  return createBreadcrumbs(args)
}

export const Default = Template.bind({})
Default.args = { depth: 2 }

export const MobileView = Template.bind({})
MobileView.args = { depth: 2 }
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
