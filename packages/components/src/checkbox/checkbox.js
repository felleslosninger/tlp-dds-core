import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils'

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
      <input type='checkbox'
        ${disabled ? 'disabled' : ''} 
        ${checked ? 'checked' : ''}
        ${required ? 'required' : ''}
      />
      ${label}
    </label>`)
}

export { createCheckbox }
