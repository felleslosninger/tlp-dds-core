import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'
import arrowRightIcon from '@digdir/ds-icons/svg/outline/ArrowRight.svg'
import externalLinkIcon from '@digdir/ds-icons/svg/outline/ExternalLink.svg'
import chevronRightIcon from '@digdir/ds-icons/svg/outline/ChevronRight.svg'

/**
 * @property {string} size - options: large (medium by default)
 * @property {string} variant - options: internal | external | shortcut (internal by default)
 */
const createIconLink = ({
  label = 'Click me',
  size = '',
  variant = 'internal',
  iconLeft = false,
  inline = false,
  href = 'https://www.digdir.no/',
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-icon-link'
  const linkClasses = classnames(classPrefix, {
    [`${classPrefix}--shortcut`]: variant === 'shortcut',
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--icon-left`]: iconLeft,
    [`${classPrefix}--icon-right`]: !iconLeft,
    [`${classPrefix}--inline`]: inline,
  })

  let iconSvg = arrowRightIcon
  let targetAttribute = ''

  if (variant === 'external') {
    iconSvg = externalLinkIcon
    targetAttribute = "target='_blank'"
  } else if (variant === 'shortcut') {
    iconSvg = chevronRightIcon
  }

  if (iconLeft) {
    return formatHtml(String.raw`
      <a class='${linkClasses}' href='${href}' ${targetAttribute} rel='noreferrer noopener'>${iconSvg}${label}</a>`)
  }

  return formatHtml(String.raw`
    <a class='${linkClasses}' href='${href}' ${targetAttribute} rel='noreferrer noopener'>${label}${iconSvg}</a>`)
}

export { createIconLink }
