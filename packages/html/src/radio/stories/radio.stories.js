import { createRadio } from '../radio.js'
import { radioScript } from '../../../../js/src/radio.script.js'
import { withDesign } from 'storybook-addon-designs'
import { useEffect } from '@storybook/client-api'
import { jsInfo } from '/docs-main/docsComponents.js'

export default {
  title: 'Komponenter/Radio',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=1513%3A12889',
    },
    docs: {
      description: {
        component: jsInfo,
      },
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

const disabledDescription = `Til en deaktivert radioknapp benyttes JavaScript for komplett funksjonalitet. Se *"Kom i gang"* for mer info.`
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Radioknapp',
  disabled: true,
  checked: false,
  size: 'medium',
}
Disabled.parameters = {
  docs: {
    description: {
      story: disabledDescription,
    },
  },
}

export const DisabledAndChecked = Template.bind({})
DisabledAndChecked.args = {
  label: 'Deaktivert og avkrysset',
  disabled: true,
  checked: true,
  size: 'medium',
}
DisabledAndChecked.parameters = {
  docs: {
    description: {
      story: disabledDescription,
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large',
  disabled: false,
  checked: false,
  size: 'large',
}
