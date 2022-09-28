export const scrollTo = (el) => {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: 'smooth'
  })
}

