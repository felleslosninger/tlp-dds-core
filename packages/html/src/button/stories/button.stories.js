import { createButton } from '../button.js'
import { withDesign } from 'storybook-addon-designs'
import { useEffect } from '@storybook/client-api'
import { buttonScript } from '../../../../js/src/button.script.js'
import { jsInfo } from '/docs-main/docsComponents.js'

export default {
  title: 'Komponenter/Button',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/Digdir-admin?node-id=1329%3A12287',
    },
    docs: {
      description: {
        component: jsInfo,
      },
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
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    icon: {
      options: ['none', 'left', 'right'],
      control: { type: 'select' },
    },
  },
}

const Template = ({ icon, ...args }) => {
  useEffect(() => {
    buttonScript()
  })
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

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Sekundærknapp',
  disabled: false,
  variant: 'secondary',
  size: 'medium',
}

const disabledDescription = `Til en deaktivert knapp benyttes JavaScript for komplett funksjonalitet. Se *"Kom i gang"* for mer info.`

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Deaktivert',
  disabled: true,
  variant: 'primary',
  size: 'medium',
}
Disabled.parameters = {
  docs: {
    description: {
      story: disabledDescription,
    },
  },
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  label: 'Ikon',
  disabled: false,
  variant: 'primary',
  size: 'medium',
  icon: 'left',
}

export const IconRight = Template.bind({})
IconRight.args = {
  label: 'Ikon',
  disabled: false,
  variant: 'primary',
  size: 'medium',
  icon: 'right',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Liten',
  disabled: false,
  variant: 'primary',
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Stor',
  disabled: false,
  variant: 'primary',
  size: 'large',
}
