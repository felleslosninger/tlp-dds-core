import classnames from 'classnames'
import { sanitizeStrict, formatHtml } from '../utils.js'

const createPanelLink = ({
  label = 'Click me',
  size = 'medium',
  href = 'https://www.digdir.no/',
  iconLeft = false,
}) => {
  label = sanitizeStrict(label)
  const classPrefix = 'dds-panel-link'
  const linkClasses = classnames(classPrefix, {
    [`${classPrefix}--large`]: size === 'large',
    [`${classPrefix}--icon-left`]: iconLeft,
  })

  const chevronIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>'

  const textureIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9c.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59c.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"/></svg>'

  return formatHtml(String.raw`
    <a class='${linkClasses}' href='${href}' target='_blank' rel='noreferrer noopener'>
      ${iconLeft ? textureIcon : ''}
      <span class='${classPrefix}__label'>${label}</span>
      ${chevronIcon}
    </a>`)
}

export { createPanelLink }
