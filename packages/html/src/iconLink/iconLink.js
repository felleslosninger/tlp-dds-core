import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createIconLink = ({
  label = 'Click me',
  size = 'medium',
  variant = 'internal',
  iconLeft = false,
  href = 'https://www.digdir.no/',
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-icon-link'
  const linkClasses = classnames(classPrefix, {
    [`${classPrefix}--shortcut`]: variant === 'shortcut',
    [`${classPrefix}--external`]: variant === 'external',
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--icon-left`]: iconLeft,
    [`${classPrefix}--icon-right`]: !iconLeft,
  })

  const croppedChevronSvg = String.raw`<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="8.59 6 7.41 12"
      >
      <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/>
    </svg>`
  const croppedOpenInNewSvg = String.raw`<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="3 3 18 18"
      >
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"/>
    </svg>`
  const croppedArrowForwardSvg = String.raw`<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="4 4 16 16"
      >
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"/>
    </svg>`

  let iconSvg = croppedArrowForwardSvg
  let targetAttribute = ''

  if (variant === 'external') {
    iconSvg = croppedOpenInNewSvg
    targetAttribute = "target='_blank'"
  } else if (variant === 'shortcut') {
    iconSvg = croppedChevronSvg
  }

  if (iconLeft) {
    return formatHtml(String.raw`
    <a class='${linkClasses}' href='${href}' ${targetAttribute} rel='noreferrer noopener'>${iconSvg}${label}</a>`)
  }

  return formatHtml(String.raw`
    <a class='${linkClasses}' href='${href}' ${targetAttribute} rel='noreferrer noopener'>${label}${iconSvg}</a>`)
}

export { createIconLink }
