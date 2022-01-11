import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createToggle = ({
  label = 'Click me',
  inputElementId = 'toggle-input-field-id',
  size = 'medium',
  checked = false,
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-toggle'
  const customToggleClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--small`]: size === 'small',
  })

  return formatHtml(String.raw`
  <div class='${customToggleClasses}'>
    <input class='${classPrefix}__input' type='checkbox' id=${inputElementId}
      ${checked ? 'checked' : ''}
    />
    <label class='${classPrefix}__label' for=${inputElementId}>
      ${label}
    </label>
  </div>`)
}

export { createToggle }
