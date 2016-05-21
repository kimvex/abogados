var db = require('../controllers/db'),
    sql= require('mssql');

var informacion = function(config){
  config = config || {};

  var request = new sql.Request();
  console.log(config.sol.session.name);
  request.query("select * from clientes2 where correo='"+config.sol.session.name+"'",function(err,datos){
    if(err){
      console.log(err);
    }

    console.log(datos[0].fec_nac);
    config.res.render('informacion-personal',{dato:datos[0]});
  });

}

module.exports = informacion;
