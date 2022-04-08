import React from 'react'
import {
  Title,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { useEffect } from '@storybook/client-api'
import { withDesign } from 'storybook-addon-designs'
import { createButton } from '../button.js'
import { buttonScript } from '../../../../js/src/button.script.js'
import InfoBox from '/docs-main/InfoBox.jsx'

export default {
  title: 'Komponenter/Button',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=5556%3A17049',
    },
    docs: {
      page: () => (
        <>
          <Title />
          <InfoBox>Denne komponenten bruker JavaScript</InfoBox>
          <PrimaryStory />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    label: {},
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    disabled: { defaultValue: false, control: { type: 'boolean' } },
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
  variant: 'primary',
  disabled: false,
  size: 'medium',
  icon: 'none',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Sekundærknapp',
  variant: 'secondary',
  disabled: false,
  size: 'medium',
  icon: 'none',
}

const disabledDescription = `Til en deaktivert knapp benyttes JavaScript for komplett funksjonalitet. Se *"Kom i gang"* for mer info.`

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Deaktivert',
  variant: 'primary',
  disabled: true,
  size: 'medium',
  icon: 'none',
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
  variant: 'primary',
  disabled: false,
  size: 'medium',
  icon: 'left',
}

export const IconRight = Template.bind({})
IconRight.args = {
  label: 'Ikon',
  variant: 'primary',
  disabled: false,
  size: 'medium',
  icon: 'right',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Liten',
  variant: 'primary',
  disabled: false,
  size: 'small',
  icon: 'none',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Stor',
  variant: 'primary',
  disabled: false,
  size: 'large',
  icon: 'none',
}

export const LargeAndSecondary = Template.bind({})
LargeAndSecondary.args = {
  label: 'Stor sekundærknapp',
  variant: 'secondary',
  disabled: false,
  size: 'large',
  icon: 'none',
}

export const DisabledWithIcon = Template.bind({})
DisabledWithIcon.args = {
  label: 'Deaktivert med ikon',
  variant: 'primary',
  disabled: true,
  size: 'medium',
  icon: 'right',
}
