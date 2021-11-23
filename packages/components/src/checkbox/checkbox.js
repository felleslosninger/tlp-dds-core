import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils'

const createCheckbox = ({
  label = 'Click me',
  disabled = false,
  checked = false,
  size = 'medium',
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dads-checkbox'
  const customCheckboxClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--disabled`]: disabled,
  })

  return formatHtml(String.raw`
    <label class='${customCheckboxClasses}'>
      <input type='checkbox'
        ${disabled ? 'disabled' : ''} 
        ${checked ? 'checked' : ''}
      />
      <span class='${classPrefix}__checkmark'></span>
      ${label}
    </label>`)
}

export { createCheckbox }
