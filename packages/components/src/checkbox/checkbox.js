import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createCheckbox = ({
  label = 'Click me',
  size = 'medium',
  disabled = false,
  checked = false,
  required = false,
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-checkbox'
  const customCheckboxClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--disabled`]: disabled,
  })

  return formatHtml(String.raw`
    <label class='${customCheckboxClasses}'>
      <input class='${classPrefix}__input' type='checkbox'
        ${disabled ? 'aria-disabled="true"' : ''}
        ${checked ? 'checked' : ''}
        ${required ? 'required' : ''}
      />
      ${label}
    </label>`)
}

export { createCheckbox }
