const db      = require('./db'),
      sql     = require('mssql'),
      moment  = require('moment');

var login = function(config){
  config = config || {};

  var request = new sql.Request();
  request.query("select * from abogados where correo='"+config.sol.body.usuario+"'",(err,respuesta)=>{
    if(err){
      throw err;
    }

    if(respuesta[0] == undefined){
      config.res.json('<=');
    }else{
      request.query("select * from abogados where correo='"+ respuesta[0].correo +"' and contrasena='"+ config.sol.body.pass +"'",(error,resultado)=>{
        if(error){
          throw error;
        }

        if(resultado[0]==undefined){
          config.res.json('<<=');
        }else{
          config.sol.session.name = config.sol.body.usuario;
          config.sol.session.cookie.expires = moment().add(14,'days').unix();
          config.res.json('=>');
        }
      });
    }
  });
}

module.exports = login;
