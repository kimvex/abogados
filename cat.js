var cat = require('catlistener');

cat.server({
  node: 'supervisor',
  debug: '-debug',
  app: 'app'
});

cat.browserify({
  original: './app/staticos/js/script.js',
  compilado: './app/staticos/js/abogados.js',
  presets: true
});
