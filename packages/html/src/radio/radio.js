import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

/**
 * @property {string} size - options: large (medium by default)
 */
const createRadio = ({
  label = 'Click me',
  inputElementId = 'radio-input-id',
  size = '',
  disabled = false,
  checked = false,
  nameAttribute = 'radio-group',
}) => {
  label = sanitizeStrict(label)

  const classPrefix = 'dds-radio'
  const customRadioClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--disabled`]: disabled,
  })

  return formatHtml(String.raw`
    <div class='${customRadioClasses}'>
      <input class='${classPrefix}__input' type='radio' id=${inputElementId}
        ${disabled ? 'aria-disabled="true"' : ''} 
        ${checked ? 'checked' : ''}
        name=${nameAttribute}
      />
      <label class='${classPrefix}__label ${classPrefix}__label--right' for=${inputElementId}>
        ${label}
      </label>
    </div>`)
}

export { createRadio }
