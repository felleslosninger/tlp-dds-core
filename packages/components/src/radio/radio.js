import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils'

const createRadio = ({
  label = 'Click me',
  size = 'medium',
  disabled = false,
  checked = false,
  required = false,
  nameAttribute = 'radio-group',
}) => {
  label = sanitizeStrict(label)

  const classPrefix = 'dds-radio'
  const customRadioClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--disabled`]: disabled,
  })
  return formatHtml(String.raw`
    <label class='${customRadioClasses}'>
      <input class='${classPrefix}__input' type='radio'
        ${disabled ? 'aria-disabled="true"' : ''} 
        ${checked ? 'checked' : ''}
        ${required ? 'required' : ''}
        name=${nameAttribute}
      />
      ${label}
    </label>`)
}

export { createRadio }
