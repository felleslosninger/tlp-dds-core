import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createIconLink = ({
  label = 'Click me',
  size = 'medium',
  variant = 'internal',
  href = 'https://www.digdir.no/',
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-icon-link'
  const linkClasses = classnames(classPrefix, {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--external`]: variant === 'external',
  })

  const iconSvgPathArrowForward =
    'm12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'
  const iconSvgPathOpenInNew =
    'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'
  const iconSvgPath =
    variant === 'external' ? iconSvgPathOpenInNew : iconSvgPathArrowForward

  const iconSvg = String.raw`
    <svg
      class="${classPrefix}__icon"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path d="${iconSvgPath}"></path>
    </svg>`

  return formatHtml(String.raw`
  <a class='${linkClasses}' href='${href}' target='_blank' rel='noreferrer noopener'>
    ${label}
    ${iconSvg}
  </a>`)
}

export { createIconLink }
