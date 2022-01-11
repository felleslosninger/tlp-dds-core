import { createToggle } from '../toggle.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Toggle',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=2556%3A28372',
    },
  },
  argTypes: {
    label: {},
    checked: {},
  },
}

const Template = (args) => {
  return createToggle(args)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Bryter',
  checked: false,
}
