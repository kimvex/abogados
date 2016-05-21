var http    = require('http'),
    Serve   = require('./app/server');

  var app = new Serve();

  var server = http.createServer(app.app);

  server.listen(3000,()=>{
    console.log("El servidor esta corriendo!");
  });
