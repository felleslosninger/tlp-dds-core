import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils'

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
  const iconSvgPathSearch =
    'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
  const iconSvgPathTexture =
    'M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z'
  const iconLeftSvg = String.raw`
    <svg
      class="${classPrefix}__icon-left"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path d="${iconSvgPathTexture}"></path>
    </svg>`
  const iconRightSvg = String.raw`
    <svg
      class="${classPrefix}__icon-right"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path d="${iconSvgPathSearch}"></path>
    </svg>`

  // Attributes
  const ariaAttribute = `aria-label='${label}'`
  const idAttribute = `id='${inputElementId}'`

  return formatHtml(String.raw`
    <div class='${baseClasses} ${extraClasses}'>
      <input class='${classPrefix}__input' 
        type='text'
        ${setAriaLabel ? ariaAttribute : idAttribute} 
        placeholder=${placeholder}
        ${disabled ? 'disabled' : ''} 
        ${required ? 'required' : ''}
      />
      ${iconLeft ? iconLeftSvg : ''}
      ${iconRight ? iconRightSvg : ''}
    </div>`)
}

export { createInputField }
