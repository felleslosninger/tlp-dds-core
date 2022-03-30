const disableElement = (selector = '') => {
  document.querySelectorAll(selector).forEach((element) => {
    // Make clone to get rid of all event listeners
    const clone = element.cloneNode(true)
    clone.addEventListener('click', (event) => {
      event.preventDefault()
    })
    element.replaceWith(clone)
  })
}

export { disableElement }
