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
import { createCheckbox } from '../checkbox.js'
import { checkboxScript } from '../../../../js/src/checkbox.script.js'
import InfoBox from '/docs-main/InfoBox.jsx'

export default {
  title: 'Core komponentar/Checkbox',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=5556%3A17050',
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
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
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

const disabledDescription = `Til en deaktivert avkrysningsboks benyttes JavaScript for komplett funksjonalitet. Se *"Kom i gang"* for mer info.`
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Deaktivert',
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
  label: 'Stor',
  disabled: false,
  checked: false,
  size: 'large',
}
