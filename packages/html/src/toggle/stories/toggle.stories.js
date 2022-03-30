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

export const LabelRight = Template.bind({})
LabelRight.args = {
  label: 'Bryter',
  checked: false,
  variant: 'rightLabel',
  toggleLabel: true,
  size: 'medium',
}

export const CheckedAndLabelRight = Template.bind({})
CheckedAndLabelRight.args = {
  label: 'Bryter',
  checked: true,
  variant: 'rightLabel',
  toggleLabel: true,
  size: 'medium',
}

export const LabelLeft = Template.bind({})
LabelLeft.args = {
  label: 'Bryter',
  checked: false,
  variant: 'leftLabel',
  toggleLabel: true,
  size: 'medium',
}

export const CheckedAndLabelLeft = Template.bind({})
CheckedAndLabelLeft.args = {
  label: 'Bryter',
  checked: true,
  variant: 'leftLabel',
  toggleLabel: true,
  size: 'medium',
}

export const StaticLabelRight = Template.bind({})
StaticLabelRight.args = {
  label: 'Bryter',
  checked: false,
  variant: 'rightLabel',
  toggleLabel: false,
  size: 'medium',
}

export const CheckedAndStaticLabelRight = Template.bind({})
CheckedAndStaticLabelRight.args = {
  label: 'Bryter',
  checked: true,
  variant: 'rightLabel',
  toggleLabel: false,
  size: 'medium',
}

export const StaticLabelLeft = Template.bind({})
StaticLabelLeft.args = {
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
  label: 'Liten bryter',
  checked: false,
  variant: 'rightLabel',
  toggleLabel: true,
  size: 'small',
}
