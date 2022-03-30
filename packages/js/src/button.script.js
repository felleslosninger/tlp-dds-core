const buttonScript = () => {
  const classPrefix = 'dds-button'
  document.querySelectorAll(`.${classPrefix}--disabled`).forEach((element) => {
    const clone = element.cloneNode(true)
    clone.addEventListener('click', (event) => {
      event.preventDefault()
    })
    element.replaceWith(clone)
  })
}

export { buttonScript }
