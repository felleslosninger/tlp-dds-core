import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createToggle = ({
  label = 'Click me',
  inputElementId = 'toggle-input-id',
  size = 'medium',
  checked = false,
  toggleLabel = true,
  variant = 'rightLabel', // rightLabel | leftLabel | dualLabel
}) => {
  const dualLabel = variant === 'dualLabel'
  label = sanitizeStrict(label)

  const classPrefix = 'dds-toggle'
  const customToggleClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--small`]: size === 'small',
  })
  const labelClassPrefix = `${classPrefix}__label`
  const customLabelClasses = classnames(
    [`${labelClassPrefix}`],
    {
      [`${labelClassPrefix}--toggle-on`]: toggleLabel,
    },
    { [`${labelClassPrefix}--right`]: variant === 'rightLabel' },
    { [`${labelClassPrefix}--left`]: variant === 'leftLabel' },
  )

  const labelledToggleElement = (mainLabel) =>
    `<label class='${customLabelClasses}' for=${inputElementId}>${mainLabel}</label>`

  // Toggle with single label
  if (!dualLabel) {
    return formatHtml(String.raw`
      <div class='${customToggleClasses}'>
        <input class='${classPrefix}__input' type='checkbox' id=${inputElementId}
        ${checked ? 'checked' : ''}
        />
        ${labelledToggleElement(label)}
      </div>`)
  }

  // Toggle with two labels
  const labelLeftId = 'toggle-label-left'
  const labelRightId = 'toggle-label-right'
  const labelLeftElement = `<label class='${classPrefix}__decoupled-label-left ${
    toggleLabel ? classPrefix + '__label--toggle-off' : ''
  }' id='${labelLeftId}'> Av </label>`
  const labelRightElement = `<label class='${classPrefix}__decoupled-label-right ${
    toggleLabel ? classPrefix + '__label--toggle-on' : ''
  }' id='${labelRightId}'> På </label>`

  return formatHtml(String.raw`
    <div class='${customToggleClasses}'>
      <input class='${classPrefix}__input' type='checkbox' id=${inputElementId} aria-labelledby='${labelLeftId} ${labelRightId}'
        ${checked ? 'checked' : ''}
      />
      ${dualLabel ? labelLeftElement : ''}
      ${labelledToggleElement('')}
      ${dualLabel ? labelRightElement : ''}
    </div>`)
}

export { createToggle }
