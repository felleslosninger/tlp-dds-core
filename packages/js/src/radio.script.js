import { disableElement } from './utils.js'

const radioScript = () => {
  const classPrefix = 'dds-radio'
  disableElement(`.${classPrefix}--disabled > input.${classPrefix}__input`)
}

export { radioScript }
