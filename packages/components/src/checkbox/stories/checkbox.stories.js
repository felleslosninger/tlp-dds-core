import storyDocs from './checkboxDocs.mdx'
import { createCheckbox } from '../checkbox'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Admin/Komponenter/Checkbox',
  decorators: [withDesign],
  parameters: {
    docs: {
      page: storyDocs,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/Digdir-admin?node-id=1553%3A13038',
    },
  },
  argTypes: {
    label: {},
    disabled: {},
    checked: {},
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => {
  return createCheckbox(args)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Avkrysningsboks',
  disabled: false,
  checked: false,
  size: 'medium',
}
Default.parameters = {
  docs: {
    source: {
      code: Template(Default.args),
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Deaktivert',
  disabled: true,
  checked: false,
  size: 'medium',
}
Disabled.parameters = {
  docs: {
    source: {
      code: Template(Disabled.args),
    },
  },
}
