import { createRadio } from '../radio.js'
import { radioScript } from '../../../../js/src/radio.script.js'
import { withDesign } from 'storybook-addon-designs'
import { useEffect } from '@storybook/client-api'

export default {
  title: 'Komponenter/Radio',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=1513%3A12889',
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
    radioScript()
  })
  if (args.disabled && args.checked) {
    // Set unique name so it stays checked (in docs page)
    args.nameAttribute = 'radio-deactivated-checked'
  }
  return createRadio(args)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Radioknapp',
  disabled: false,
  checked: false,
  size: 'medium',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Radioknapp',
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