var lato = new FontFaceObserver('Lato', {
  weight: 700,
});

var merriweatherNormal = new FontFaceObserver('Merriweather', {
  weight: 400,
});

var merriweatherItalic = new FontFaceObserver('Merriweather', {
  weight: 400,
  style: 'italic',
});

var merriweatherBold = new FontFaceObserver('Merriweather', {
  weight: 700,
});

var merriweatherBoldItalic = new FontFaceObserver('Merriweather', {
  weight: 700,
  style: 'italic',
});

Promise.all([
  lato.load(),
  merriweatherNormal.load(),
  merriweatherItalic.load(),
  merriweatherBold.load(),
  merriweatherBoldItalic.load(),
]).then(function() {
  document.documentElement.className += " fonts-loaded";
}, function() {
  document.documentElement.className += " fonts-unavailable";
});
