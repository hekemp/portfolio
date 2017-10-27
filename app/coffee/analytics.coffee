gtag = ->
  dataLayer.push arguments
  return

window.dataLayer = window.dataLayer or []
gtag 'js', new Date
gtag 'config', 'UA-47263984-3'
