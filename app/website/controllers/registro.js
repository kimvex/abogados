var db = require('./db'),
    sql= require('mssql');

var registro = function(config){
  config = config || {};

  var request = new sql.Request();

  var dat = "'"+ config.sol.body.nombre +"','"+config.sol.body.apellido+"','"+config.sol.body.nacimiento+"','"+ config.sol.body.domicilio +"','"+config.sol.body.sexo+"','"+config.sol.body.ocupacion+"','"+config.sol.body.ciudad+"','"+config.sol.body.telefono+"','"+config.sol.body.correo+"','"+config.sol.body.pass+"'";
  console.log(config.sol.body);
  request.query("select * from clientes2 where correo='"+config.sol.body.correo+"'",function(err,datos){
    if(err){
      console.log(err);
    }
    if(datos[0] == undefined){
      request.query("insert into clientes2 (nombre,apellidos,fec_nac,domicilio,sexo,ocupacion,ciudad,num_telefono,correo,contrasena) values("+dat+")",function(error,respuesta){
        if(error){
          console.log(error);
        }

        config.res.json("=>");
      })
    }else{
      config.res.json("==>");
    }
  });
}

module.exports = registro;
