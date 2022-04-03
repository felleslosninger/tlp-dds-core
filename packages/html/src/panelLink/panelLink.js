import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

import chevronIcon from '@digdir/ds-icons/svg/outline/ChevronRight.svg'
import imageIcon from '@digdir/ds-icons/svg/outline/Image.svg'

/**
 * @property {string} size - options: large (medium by default)
 */
const createPanelLink = ({
  label = 'Click me',
  size = '',
  href = 'https://www.digdir.no/',
  iconLeft = false,
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-panel-link'
  const linkClasses = classnames(classPrefix, {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--icon-left`]: iconLeft,
  })

  return formatHtml(String.raw`
    <a class='${linkClasses}' href='${href}' target='_blank' rel='noreferrer noopener'>
      ${iconLeft ? imageIcon : ''}
      <span class='${classPrefix}__label'>${label}</span>
      ${chevronIcon}
    </a>`)
}

export { createPanelLink }
