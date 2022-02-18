import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createButton = ({
  label = 'Click me',
  variant = '',
  disabled = false,
  size = 'medium',
  iconLeft = false,
  iconRight = false,
  iconSvgPathLeft = 'M19.51 3.08 3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3 3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z',
  iconSvgPathRight = 'M19.51 3.08 3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3 3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z',
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-button'
  const buttonClasses = classnames(
    classPrefix,
    { [`${classPrefix}--secondary`]: variant === 'secondary' },
    { [`${classPrefix}--disabled`]: disabled },
    { [`${classPrefix}--x-small`]: size === 'x-small' },
    { [`${classPrefix}--small`]: size === 'small' },
    { [`${classPrefix}--large`]: size === 'large' },
    { [`${classPrefix}--x-large`]: size === 'x-large' },
    { [`${classPrefix}--icon-left`]: iconLeft },
    { [`${classPrefix}--icon-right`]: iconRight },
  )
  const iconSvgLeft = String.raw`<svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    >
      <path d='${iconSvgPathLeft}'></path>
    </svg>`

  const iconSvgRight = String.raw`<svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    >
    <path d='${iconSvgPathRight}'></path>
    </svg>`

  return formatHtml(String.raw`
  <button
    type='button'
    class='${buttonClasses}'
    ${disabled ? 'aria-disabled="true"' : ''}
  >
    ${iconLeft ? iconSvgLeft : ''}
    ${label}
    ${iconRight ? iconSvgRight : ''}
  </button>`)
}

export { createButton }
