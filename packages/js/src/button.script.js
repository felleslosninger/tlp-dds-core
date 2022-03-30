import { disableElement } from './utils.js'

const buttonScript = () => {
  const classPrefix = 'dds-button'
  disableElement(`.${classPrefix}--disabled`)
}

export { buttonScript }
