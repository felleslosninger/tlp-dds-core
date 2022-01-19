const radioScript = () => {
  const classPrefix = 'dds-radio'
  document
    .querySelectorAll(`.${classPrefix}--disabled > input.${classPrefix}__input`)
    .forEach((element) =>
      element.addEventListener('click', (event) => {
        event.preventDefault()
      }),
    )
}

export { radioScript }
