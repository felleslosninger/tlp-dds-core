import { createPanelLink } from '../panelLink.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Panel-link',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=2365%3A23464',
    },
    backgrounds: {
      default: 'grey-200',
    },
  },
  argTypes: {
    label: {},
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => {
  return createPanelLink(args)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Panel link',
  size: 'medium',
}
Default.parameters = {
  docs: {
    source: {
      code: Template(Default.args),
    },
  },
}
