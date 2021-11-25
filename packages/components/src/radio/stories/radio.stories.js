import storyDocs from './radioDocs.mdx'
import { createRadio } from '../radio'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Radio',
  decorators: [withDesign],
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
  return createRadio(args)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Radioknapp',
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
  label: 'Radioknapp',
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
