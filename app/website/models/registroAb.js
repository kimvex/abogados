const sql = require('mssql'),
      fs  = require('fs-extra');

function ejecutamos(config){
  config.json('=>');
}

const abogado = function(config){
  config = config || {};
  const request = new sql.Request();
  const dato = "'"+config.sol.body.nombre+"','"+config.sol.body.apellido+"','"+config.sol.body.fecha+"','"+config.sol.body.domicilio+"','"+config.sol.body.sexo+"','"+config.sol.body.cedula+"','"+config.sol.body.rfc+"','"+config.sol.body.experiencia+"','"+config.sol.body.ciudad+"','"+config.sol.body.telefono+"','"+config.sol.body.correo+"','"+config.sol.body.pass+"'";
  request.query("select * from abogados where correo='"+config.sol.body.correo+"'",(error,resultado)=>{
    if(error){
      throw error;
    }

    if(resultado[0] == undefined){
      request.query("insert into abogados (nombre,apellidos,fec_nac,domicilio,sexo,cedula,rfc,experiencia,ciudad,telefono,correo,contrasena,admin) values("+dato+",'0')",(err,respuesta)=>{
        if(err){
          throw err;
        }else{
          fs.copy('app/staticos/img/anonimo.jpg','app/staticos/perfiles/'+config.sol.body.correo+'/anonimo.jpg',(err)=>{
            if(err){
              throw err;
            }
            request.query("insert into imagen (correos,imagenes) values('"+config.sol.body.correo+"','anonimo.jpg')",(err,result)=>{
              if(err){
                throw err;
              }
              ejecutamos(config.res);
            });
          });
        }
      });
    }else{
      config.res.json("<<=");
    }
  });
}

module.exports = abogado;
