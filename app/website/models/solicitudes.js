const db = require('../controllers/db'),
      sql= require('mssql');

var solicitudes = function(config){
  config = config || {};

  var request = new sql.Request();

  request.query("select *  from citas where correo='"+ config.sol.session.name +"'",(err,respuesta)=>{
    if(err){
      throw err;
    }

    console.log(respuesta);
    config.res.json(respuesta);
  });
}

module.exports = solicitudes;
