const checkboxScript = () => {
  const classPrefix = 'dds-checkbox'
  document
    .querySelectorAll(`.${classPrefix}--disabled > input.${classPrefix}__input`)
    .forEach((element) =>
      element.addEventListener('click', (event) => {
        event.preventDefault()
      }),
    )
}

export { checkboxScript }
