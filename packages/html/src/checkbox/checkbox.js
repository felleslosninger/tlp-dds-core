import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createCheckbox = ({
  label = 'Click me',
  inputElementId = 'checkbox-input-id',
  size = 'medium',
  disabled = false,
  checked = false,
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-checkbox'
  const customCheckboxClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--disabled`]: disabled,
  })

  return formatHtml(String.raw`
    <div class='${customCheckboxClasses}'>
      <input class='${classPrefix}__input' type='checkbox' id=${inputElementId}
        ${disabled ? 'aria-disabled="true"' : ''}
        ${checked ? 'checked' : ''}
      />
      <label class='${classPrefix}__label ${classPrefix}__label--right' for=${inputElementId}>
        ${label}
      </label>
    </div>`)
}

export { createCheckbox }
