import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils'

const createRadio = ({
  label = 'Click me',
  size = 'medium',
  disabled = false,
  checked = false,
  required = false,
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-radio'
  const customRadioClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--disabled`]: disabled,
  })
  return formatHtml(String.raw`
    <label class='${customRadioClasses}'>
      <input type='radio'
        ${disabled ? 'disabled' : ''} 
        ${checked ? 'checked' : ''}
        ${required ? 'required' : ''}
      />
      ${label}
    </label>`)
}

export { createRadio }
