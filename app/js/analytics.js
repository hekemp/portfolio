var gtag;

gtag = function() {
  dataLayer.push(arguments);
};

window.dataLayer = window.dataLayer || [];

gtag('js', new Date);

gtag('config', 'UA-47263984-3');
