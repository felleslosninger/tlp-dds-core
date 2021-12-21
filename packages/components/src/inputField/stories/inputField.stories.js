import { createInputField } from '../inputField'
import { createLabeledInputField } from '../labeledInputField'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Input-field',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=1656%3A14991',
    },
  },
  argTypes: {
    label: {},
    showLabel: {},
    iconLeft: {},
    iconRight: {},
    variant: {
      options: ['default', 'error', 'errorMessage', 'disabled'],
      control: { type: 'select' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
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

export const InputWithLabel = Template.bind({})
InputWithLabel.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: false,
  iconRight: false,
  showLabel: true,
}

export const InputNoLabel = Template.bind({})
InputNoLabel.args = {
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

export const IconInput = Template.bind({})
IconInput.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: true,
  iconRight: false,
  showLabel: true,
}

export const SearchWithIcon = Template.bind({})
SearchWithIcon.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'default',
  iconLeft: true,
  iconRight: true,
  showLabel: true,
}

export const LargeInput = Template.bind({})
LargeInput.args = {
  label: 'Beskrivelse',
  size: 'large',
  variant: 'default',
  iconLeft: false,
  iconRight: false,
  showLabel: true,
}

export const ErrorInput = Template.bind({})
ErrorInput.args = {
  label: 'Beskrivelse',
  size: 'medium',
  variant: 'errorMessage',
  iconLeft: true,
  iconRight: false,
  showLabel: true,
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
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
