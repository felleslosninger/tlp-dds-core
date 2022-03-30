import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'
import imageIcon from '@digdir/ds-icons/svg/image/outline.svg'

/**
 * @property {string} variant - options: secondary (primary by default)
 * @property {string} size - options: small | large (medium by default)
 */
const createButton = ({
  label = 'Click me',
  variant = '',
  disabled = false,
  size = '',
  iconLeft = false,
  iconRight = false,
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-button'
  const buttonClasses = classnames(
    classPrefix,
    { [`${classPrefix}--secondary`]: variant === 'secondary' },
    { [`${classPrefix}--disabled`]: disabled },
    { [`${classPrefix}--small`]: size === 'small' },
    { [`${classPrefix}--large`]: size === 'large' },
    { [`${classPrefix}--icon-left`]: iconLeft },
    { [`${classPrefix}--icon-right`]: iconRight },
  )

  return formatHtml(String.raw`
  <button
    type='button'
    class='${buttonClasses}'
    ${disabled ? 'aria-disabled="true"' : ''}
  >
    ${iconLeft ? imageIcon : ''}
    ${label}
    ${iconRight ? imageIcon : ''}
  </button>`)
}

export { createButton }
