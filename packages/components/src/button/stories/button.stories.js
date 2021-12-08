import storyDocs from './buttonDocs.mdx'
import { createButton } from '../button'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Button',
  decorators: [withDesign],
  parameters: {
    docs: {
      page: storyDocs,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/Digdir-admin?node-id=1329%3A12287',
    },
  },
  argTypes: {
    label: {},
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    disabled: {},
    size: {
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
      control: { type: 'select' },
    },
    icon: {
      options: ['none', 'left', 'right'],
      control: { type: 'select' },
    },
  },
}

const Template = ({ icon, ...args }) => {
  const iconLeft = icon === 'left'
  const iconRight = icon === 'right'
  return createButton({ iconLeft, iconRight, ...args })
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primærknapp',
  disabled: false,
  variant: 'primary',
  size: 'medium',
}
Primary.parameters = {
  docs: {
    source: {
      code: Template(Primary.args),
    },
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Sekundærknapp',
  disabled: false,
  variant: 'secondary',
  size: 'medium',
}
Secondary.parameters = {
  docs: {
    source: {
      code: Template(Secondary.args),
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Deaktivert',
  disabled: true,
  variant: 'primary',
  size: 'medium',
}
Disabled.parameters = {
  docs: {
    source: {
      code: Template(Disabled.args),
    },
  },
}

export const IconButton = Template.bind({})
IconButton.args = {
  label: 'Ikon',
  disabled: false,
  variant: 'primary',
  size: 'medium',
  icon: 'right',
}
IconButton.parameters = {
  docs: {
    source: {
      code: Template(IconButton.args),
    },
  },
}
