import { formatHtml } from '../utils.js'

const createBreadcrumbs = ({ depth = 1 }) => {
  const classPrefix = 'dds-breadcrumbs'

  const linkElement = (label = 'Hjem') => String.raw`
    <li class='${classPrefix}__item'>
      <a class='dds-link' href='.' rel='noreferrer noopener'>${label}</a>
    </li>`

  const textElement = (label = 'Nåværende side') => String.raw`
    <li class='${classPrefix}__item'>
      <label class='${classPrefix}__text'>${label}</label>
    </li>`

  const listElements = () => {
    let list = linkElement()

    for (let i = 1; i < depth; i++) {
      list += linkElement('Nivå ' + i)
    }
    list += textElement()

    return list
  }

  return formatHtml(String.raw`
    <nav class='${classPrefix}'>
      <ol class='${classPrefix}__list'>
          ${listElements()}
      </ol>
    </nav>
  `)
}

export { createBreadcrumbs }
