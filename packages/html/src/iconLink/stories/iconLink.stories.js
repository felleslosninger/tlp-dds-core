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
  label: 'Intern lenke',
  size: 'medium',
  variant: 'internal',
  iconLeft: false,
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  label: 'Ekstern lenke',
  size: 'medium',
  variant: 'external',
  iconLeft: false,
}

export const Shortcut = Template.bind({})
Shortcut.args = {
  label: 'Snarvei',
  size: 'medium',
  variant: 'shortcut',
  iconLeft: true,
}
