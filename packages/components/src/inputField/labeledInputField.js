import { sanitizeStrict, formatHtml } from '../utils'
import { createInputField } from './inputField'

const createLabeledInputField = ({
  inputElementId = 'input-field-id',
  label = 'Label',
  ...args
}) => {
  label = sanitizeStrict(label)
  const showErrorMessage = args.showErrorMessage

  // CSS classes
  const formFieldPrefix = 'dds-form-field'

  // Elements
  const inputField = createInputField({
    ...args,
    setAriaLabel: false,
    inputElementId: inputElementId,
    extraClasses: `${formFieldPrefix}__control`,
  })

  const labelElement = String.raw`
    <label 
      class='${formFieldPrefix}__label' 
      for='${inputElementId}'>
      ${label}
    </label>`

  const errorMessageElement = String.raw`
  <div 
  class='${formFieldPrefix}__error-message'>
    Påkrevd felt 
  </div>`

  // Create input field with visible label element
  return formatHtml(String.raw`
    <div class='${formFieldPrefix}'>
      ${inputField}
      ${labelElement}
      ${showErrorMessage ? errorMessageElement : ''}
    </div>`)
}

export { createLabeledInputField }
