import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'
import imageIcon from '@digdir/ds-icons/svg/image/outline.svg'
import searchIcon from '@digdir/ds-icons/svg/search/outline.svg'

const createInputField = ({
  label = 'Label',
  inputElementId = 'input-field-id',
  extraClasses = '',
  setAriaLabel = true,
  size = 'medium',
  variant = 'default',
  iconLeft = false,
  iconRight = false,
  required = false,
}) => {
  label = sanitizeStrict(label)
  const placeholder = 'Placeholder'
  const disabled = variant === 'disabled'

  // CSS classes
  const classPrefix = 'dds-input-field'
  const baseClasses = classnames(classPrefix, {
    [`${classPrefix}--icon-left`]: iconLeft,
    [`${classPrefix}--icon-right`]: iconRight,
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--disabled`]: disabled,
    [`${classPrefix}--error`]:
      variant === 'error' || variant === 'errorMessage',
  })

  // Elements
  const iconLeftSvg = String.raw`
    <span class='${classPrefix}__icon-left'>
      ${imageIcon}
    </span>
    `
  const iconRightSvg = String.raw`
    <span class='${classPrefix}__icon-right'>
      ${searchIcon}
    </span>
    `

  // Attributes
  const ariaLabelAttribute = `aria-label='${label}'`
  const idAttribute = `id='${inputElementId}'`

  return formatHtml(String.raw`
    <div class='${baseClasses} ${extraClasses}'>
      <input class='${classPrefix}__input' 
        type='text'
        ${setAriaLabel ? ariaLabelAttribute : idAttribute} 
        placeholder=${placeholder}
        ${disabled ? 'aria-disabled="true" readonly' : ''} 
        ${required ? 'required' : ''}
      />
      ${iconLeft ? iconLeftSvg : ''}
      ${iconRight ? iconRightSvg : ''}
    </div>`)
}

export { createInputField }
