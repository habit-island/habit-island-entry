import './gtag'
import importHTML from 'import-html-entry'

importHTML(
  `https://habit-island-portal.oss-accelerate.aliyuncs.com/index.html`
).then(res => {
  const html = document.createElement('html')
  html.innerHTML = res.template
  const head = html.getElementsByTagName('head')[0]
  document.head.innerHTML = head.innerHTML
  const body = html.getElementsByTagName('body')[0]
  document.body.innerHTML = body.innerHTML
  window.assetPublicPath = res.assetPublicPath

  res.execScripts(undefined, false)
})
