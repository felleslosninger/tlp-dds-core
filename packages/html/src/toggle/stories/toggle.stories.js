import { createToggle } from '../toggle.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Toggle',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=5556%3A17012',
    },
  },
  argTypes: {
    label: {},
    checked: {},
    variant: {
      options: ['rightLabel', 'leftLabel', 'dualLabel'],
      control: { type: 'select' },
    },
    toggleLabel: {},
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => {
  return createToggle(args)
}

export const RightLabel = Template.bind({})
RightLabel.args = {
  label: 'Bryter',
  checked: false,
  variant: 'rightLabel',
  toggleLabel: true,
  size: 'medium',
}

export const LeftLabel = Template.bind({})
LeftLabel.args = {
  label: 'Bryter',
  checked: false,
  variant: 'leftLabel',
  toggleLabel: true,
  size: 'medium',
}

export const RightStaticLabel = Template.bind({})
RightStaticLabel.args = {
  label: 'Bryter',
  checked: false,
  variant: 'rightLabel',
  toggleLabel: false,
  size: 'medium',
}

export const LeftStaticLabel = Template.bind({})
LeftStaticLabel.args = {
  label: 'Bryter',
  checked: false,
  variant: 'leftLabel',
  toggleLabel: false,
  size: 'medium',
}

export const DualLabel = Template.bind({})
DualLabel.args = {
  label: 'Bryter',
  checked: false,
  variant: 'dualLabel',
  toggleLabel: true,
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Kompakt bryter',
  checked: false,
  variant: 'rightLabel',
  toggleLabel: true,
  size: 'small',
}
