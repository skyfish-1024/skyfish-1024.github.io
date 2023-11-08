(function init () {
  const docEle = document.documentElement
  function setHtmlFontSize () {
    const winW =
      document.documentElement.clientWidth || document.body.clientWidth
    if (winW < 750) {
      let fontSize = 10
      fontSize = (16 / 3) * 2
      docEle.style.fontSize = fontSize.toFixed(3) + 'px'
    } else {
      docEle.style.fontSize = 16 + 'px'
    }
  }
  setHtmlFontSize()

  window.addEventListener('hashchange', setHtmlFontSize)
  window.addEventListener('resize', setHtmlFontSize)
})()
