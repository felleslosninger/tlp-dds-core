import { createIconLink } from '../iconLink.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Icon-link',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=2365%3A23464',
    },
  },
  argTypes: {
    label: {},
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['internal', 'external', 'shortcut'],
      control: { type: 'select' },
    },
    iconLeft: {},
  },
}

const Template = (args) => {
  return createIconLink(args)
}

export const InternalLink = Template.bind({})
InternalLink.args = {
  label: 'Internal link',
  size: 'medium',
  variant: 'internal',
  iconLeft: false,
}
InternalLink.parameters = {
  docs: {
    source: {
      code: Template(InternalLink.args),
    },
  },
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  label: 'External link',
  size: 'medium',
  variant: 'external',
  iconLeft: false,
}
ExternalLink.parameters = {
  docs: {
    source: {
      code: Template(ExternalLink.args),
    },
  },
}

export const Shortcut = Template.bind({})
Shortcut.args = {
  label: 'Snarvei',
  size: 'medium',
  variant: 'shortcut',
  iconLeft: true,
}
