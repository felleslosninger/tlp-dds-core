import { createIconLink } from '../iconLink'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Admin/Komponenter/Icon-link',
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
      options: ['internal', 'external'],
      control: { type: 'select' },
    },
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
}
ExternalLink.parameters = {
  docs: {
    source: {
      code: Template(ExternalLink.args),
    },
  },
}
