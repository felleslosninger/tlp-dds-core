import { createInputField } from '../inputField.js'
import { createLabeledInputField } from '../labeledInputField.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Core komponentar/Input-field',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=5556%3A17042',
    },
  },
  argTypes: {
    label: {},
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'error', 'errorMessage', 'disabled'],
      control: { type: 'select' },
    },
    iconLeft: {},
    iconRight: {},
    showLabel: {},
  },
}

const Template = (args) => {
  if (args.variant === 'errorMessage') {
    return createLabeledInputField({ ...args, showErrorMessage: true })
  } else if (args.showLabel) {
    return createLabeledInputField(args)
  }
  return createInputField(args)
}

export const Label = Template.bind({})
Label.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: false,
  iconRight: false,
  showLabel: true,
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: false,
  iconRight: false,
  showLabel: false,
}

export const SearchBar = Template.bind({})
SearchBar.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: false,
  iconRight: true,
  showLabel: false,
}

export const Icon = Template.bind({})
Icon.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: true,
  iconRight: false,
  showLabel: true,
}

export const SearchBarWithIcon = Template.bind({})
SearchBarWithIcon.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: true,
  iconRight: true,
  showLabel: true,
}

export const Large = Template.bind({})
Large.args = {
  label: 'Beskrivelse',
  size: 'large',
  variant: 'default',
  iconLeft: false,
  iconRight: false,
  showLabel: true,
}

export const LargeWithIcon = Template.bind({})
LargeWithIcon.args = {
  label: 'Beskrivelse',
  size: 'large',
  variant: 'default',
  iconLeft: true,
  iconRight: false,
  showLabel: true,
}

export const Error = Template.bind({})
Error.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'errorMessage',
  iconLeft: true,
  iconRight: false,
  showLabel: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'disabled',
  iconLeft: false,
  iconRight: false,
  showLabel: true,
}

let idCounter = 0
export const All = () => {
  return (
    createLabeledInputField({
      size: 'large',
      variant: 'default',
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'default',
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'default',
      iconLeft: false,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'default',
      iconLeft: true,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'error',
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'error',
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'error',
      showErrorMessage: true,
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'error',
      showErrorMessage: true,
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: false,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: true,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    // Medium
    createLabeledInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: false,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: true,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'error',
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'error',
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'error',
      showErrorMessage: true,
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'error',
      showErrorMessage: true,
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: false,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: true,
      iconRight: false,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: false,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createLabeledInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: true,
      iconRight: true,
      showLabel: true,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    // No label
    createInputField({
      size: 'large',
      variant: 'default',
      iconLeft: false,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'default',
      iconLeft: true,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'default',
      iconLeft: false,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'default',
      iconLeft: true,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'error',
      iconLeft: false,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'error',
      iconLeft: true,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: false,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: true,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: false,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'large',
      variant: 'disabled',
      iconLeft: true,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    // Medium
    createInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: false,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: true,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: false,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'default',
      iconLeft: true,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'error',
      iconLeft: false,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'error',
      iconLeft: true,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: false,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: true,
      iconRight: false,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: false,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    }) +
    createInputField({
      size: 'medium',
      variant: 'disabled',
      iconLeft: true,
      iconRight: true,
      showLabel: false,
      inputElementId: `input-id-${idCounter++}`,
    })
  )
}
All.parameters = {
  controls: { disable: true },
}
