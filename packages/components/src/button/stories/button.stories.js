import { createButton } from '../button'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Button',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/Digdir-admin?node-id=1329%3A12287',
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
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
      control: { type: 'select' },
    },
    icon: {
      options: ['none', 'left', 'right'],
      control: { type: 'select' },
    },
  },
}

const Template = ({ icon, ...args }) => {
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

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Deaktivert',
  disabled: true,
  variant: 'primary',
  size: 'medium',
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

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  label: 'X-small',
  disabled: false,
  variant: 'primary',
  size: 'x-small',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small',
  disabled: false,
  variant: 'primary',
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Medium',
  disabled: false,
  variant: 'primary',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large',
  disabled: false,
  variant: 'primary',
  size: 'large',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  label: 'X-large',
  disabled: false,
  variant: 'primary',
  size: 'x-large',
}
