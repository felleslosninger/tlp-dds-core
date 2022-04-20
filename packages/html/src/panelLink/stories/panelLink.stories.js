import { createPanelLink } from '../panelLink.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Core komponentar/Panel-link',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=5556%3A17074',
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
    iconLeft: {
      control: { type: 'boolean' },
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
  iconLeft: false,
}

export const Large = Template.bind({})
Large.args = {
  label: 'Panel link',
  size: 'large',
  iconLeft: false,
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  label: 'Panel link',
  size: 'medium',
  iconLeft: true,
}

export const LargeWithIconLeft = Template.bind({})
LargeWithIconLeft.args = {
  label: 'Panel link',
  size: 'large',
  iconLeft: true,
}
