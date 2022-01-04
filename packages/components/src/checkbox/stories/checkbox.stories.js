import { createCheckbox } from '../checkbox.js'
import { checkboxScript } from '../checkbox.script.js'
import { withDesign } from 'storybook-addon-designs'
import { useEffect } from '@storybook/client-api'

export default {
  title: 'Komponenter/Checkbox',
  decorators: [withDesign],
  parameters: {
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
  useEffect(() => {
    checkboxScript()
  })
  return createCheckbox(args)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Avkrysningsboks',
  disabled: false,
  checked: false,
  size: 'medium',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Deaktivert',
  disabled: true,
  checked: false,
  size: 'medium',
}

export const DisabledAndChecked = Template.bind({})
DisabledAndChecked.args = {
  label: 'Deaktivert og avkrysset',
  disabled: true,
  checked: true,
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large',
  disabled: false,
  checked: false,
  size: 'large',
}
