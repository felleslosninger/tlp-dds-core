import storyDocs from './checkboxDocs.mdx'
import { createCheckbox } from '../checkbox'

export default {
  title: 'Komponenter/Checkbox',
  parameters: {
    docs: {
      page: storyDocs,
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
