var sql = require('mssql');

var db = function(config){
  config = config || {};

  var config = {
    user: 'lolo',
    password: 'dolores12',
    server: '192.168.0.113',
    database: 'lolo',
  }

  return sql.connect(config,function(err){
    if(err){
      console.log(err);
    }
    console.log('Conexión a la base de datos!');
  });
}

module.exports = db;
