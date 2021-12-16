import { createInputField } from '../inputField'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Input-field',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=1656%3A14991',
    },
  },
  argTypes: {
    iconLeft: {},
    iconRight: {},
    disabled: {},
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => {
  return createInputField(args)
}

export const DualIcon = Template.bind({})
DualIcon.args = {
  size: 'medium',
  disabled: false,
  iconLeft: true,
  iconRight: true,
}
