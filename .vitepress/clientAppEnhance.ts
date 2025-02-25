export default ({ router }) => {
  router.afterEach(() => {
    // Ensure the DOM is updated before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  })
}
