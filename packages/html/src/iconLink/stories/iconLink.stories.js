import { createIconLink } from '../iconLink.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Icon-link',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/?node-id=2365%3A23464',
    },
  },
  argTypes: {
    label: {},
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['internal', 'external', 'shortcut'],
      control: { type: 'select' },
    },
    iconLeft: {},
  },
}

const Template = (args) => {
  return createIconLink(args)
}

export const InternalLink = Template.bind({})
InternalLink.args = {
  label: 'Intern lenke',
  size: 'medium',
  variant: 'internal',
  iconLeft: false,
  inline: false,
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  label: 'Ekstern lenke',
  size: 'medium',
  variant: 'external',
  iconLeft: false,
  inline: false,
}

export const Shortcut = Template.bind({})
Shortcut.args = {
  label: 'Snarvei',
  size: 'medium',
  variant: 'shortcut',
  iconLeft: true,
  inline: false,
}

export const Large = Template.bind({})
Large.args = {
  label: 'Stor ekstern lenke',
  size: 'large',
  variant: 'external',
  iconLeft: false,
  inline: false,
}

export const Inline = () => {
  return String.raw`
    <div class='dds-text-heading-700'>
      Overskrift med
      ${createIconLink({
        label: 'intern lenke',
        size: 'large',
        variant: 'internal',
        inline: true,
      })}
    </div>

    <div class='dds-text-ingress-500'>
      Ingress med en
      ${createIconLink({
        label: 'ekstern lenke',
        size: 'large',
        variant: 'external',
        inline: true,
      })}
      til et sted.
    </div>

    <div class='dds-text-body-200'>
      Liten body med
      ${createIconLink({
        label: 'lenke',
        size: 'medium',
        variant: 'external',
        inline: true,
      })} til et sted.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor mi. 
      Cras quis velit erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Maecenas tempor quam vel elit aliquam, id vulputate neque rutrum.
    </div>`
}
