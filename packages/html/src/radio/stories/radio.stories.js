import { createRadio } from '../radio.js'
import { radioScript } from '../../../../js/src/radio.script.js'
import { withDesign } from 'storybook-addon-designs'
import { useEffect } from '@storybook/client-api'

const componentDescription = String.raw`
<div style="display: flex; align-items: center;">
  <div style="border-radius: 4px; border: solid 2px; margin-right: 10px;padding: 4px;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px"  fill="#ffc922"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" width="32px" height="32px" viewBox="0 0 24 24" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,14v-1h1.5v0.5h2v-1H13c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1h-1.5v-0.5h-2v1H16 c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1h-3C12.45,15,12,14.55,12,14z M9,9v4.5H7.5v-1H6v1C6,14.33,6.67,15,7.5,15H9 c0.83,0,1.5-0.67,1.5-1.5V9C10.5,9,9.83,9,9,9z"/></g></svg>
  </div>
  Denne komponenten bruker JavaScript.
</div>
`

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
        component: componentDescription,
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

const disabledDescription = `Denne varianten av komponenten trenger JavaScript for komplett funksjonalitet. Se *"Kom i gang"* for mer info.`
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

export const Large = Template.bind({})
Large.args = {
  label: 'Large',
  disabled: false,
  checked: false,
  size: 'large',
}
