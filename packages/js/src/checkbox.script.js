import { disableElement } from './utils.js'

const checkboxScript = () => {
  const classPrefix = 'dds-checkbox'
  disableElement(`.${classPrefix}--disabled > input.${classPrefix}__input`)
}

export { checkboxScript }
