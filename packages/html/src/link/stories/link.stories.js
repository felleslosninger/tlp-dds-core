import { withDesign } from 'storybook-addon-designs'
import { formatHtml } from '../../utils.js'

export default {
  title: 'Core komponentar/Link',
  decorators: [withDesign],
  canvas: {
    disabled: true,
  },
  viewMode: 'docs',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=5556%3A17074',
    },
  },
  argTypes: {
    textClass: {
      options: [
        'dds-text-body-100',
        'dds-text-body-200',
        'dds-text-body-300',
        'dds-text-body-400',
        'dds-text-interface-200',
        'dds-text-interface-300',
        'dds-text-interface-400',
        'dds-text-ingress-500',
        'dds-text-ingress-600',
        'dds-text-heading-500',
        'dds-text-heading-600',
        'dds-text-heading-700',
        'dds-text-heading-800',
        'dds-text-heading-900',
      ],
      control: { type: 'select' },
    },
    paragraph: {
      control: { type: 'boolean' },
    },
  },
}

const Template = ({ textClass = '', ...args }) => {
  let linkHtml = String.raw`<a class="dds-link ${textClass}" href="https://www.digdir.no/" target="_blank" rel="noreferrer noopener">Slik ser en lenke til Digdir ut i løpende tekst</a>`

  if (args.paragraph) {
    linkHtml = String.raw`
    <p class="${textClass}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor mi. Cras quis velit erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor quam vel elit aliquam, id vulputate neque rutrum. Phasellus vehicula at tellus quis lacinia. Nam nec erat vitae eros ornare elementum id vel quam.
      <a class="dds-link" href="https://www.digdir.no/" target="_blank" rel="noreferrer noopener">Slik ser en lenke til Digdir ut i løpende tekst</a>.
      Donec eget molestie lacus. Nulla ac eros et nisl sodales congue in eget massa. Fusce aliquet est vitae sem eleifend congue. Suspendisse id risus vitae sapien maximus bibendum. Fusce non ipsum ac orci varius sollicitudin a in ante.
    </p>
  `
  }
  return formatHtml(linkHtml)
}

export const Default = Template.bind({})
Default.args = {
  paragraph: false,
}

export const InlinePreview = Template.bind({})
InlinePreview.args = {
  paragraph: true,
}

export const Interface200 = Template.bind({})
Interface200.args = {
  paragraph: false,
  textClass: 'dds-text-interface-200',
}

export const Body400 = Template.bind({})
Body400.args = {
  paragraph: false,
  textClass: 'dds-text-body-400',
}

export const Ingress500 = Template.bind({})
Ingress500.args = {
  paragraph: false,
  textClass: 'dds-text-ingress-500',
}

export const Heading600 = Template.bind({})
Heading600.args = {
  paragraph: false,
  textClass: 'dds-text-heading-600',
}
