import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createPanelLink = ({
  label = 'Click me',
  size = 'medium',
  href = 'https://www.digdir.no/',
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-panel-link'
  const linkClasses = classnames(classPrefix, {
    [`${classPrefix}--large`]: size === 'large',
  })

  const iconSvgPathChevronRight =
    'M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z'
  const iconSvgPathTexture =
    'M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z'

  const rightIcon = String.raw`
    <svg
      class="${classPrefix}__icon-right"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path d="${iconSvgPathChevronRight}"></path>
    </svg>`

  const leftIcon = String.raw`
    <svg
      class="${classPrefix}__icon-left"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path d="${iconSvgPathTexture}"></path>
    </svg>`

  return formatHtml(String.raw`
    <a class='${linkClasses}' href='${href}' target='_blank' rel='noreferrer noopener'>
      ${leftIcon}
      <span class='${classPrefix}__label'>${label}</span>
      ${rightIcon}
    </a>`)
}

export { createPanelLink }
