const sql = require('mssql');

const datos = function(config){
  config = config || {};

  const request = new sql.Request();
  request.query("select * from abogados where correo='"+config.sol.session.name+"'",(err,respuesta)=>{
    if(err){
      throw err;
    }
    request.query("select * from imagen where correos='"+ config.sol.session.name +"'",(err,resultado)=>{
      if(err){
        throw err;
      }

      console.log(resultado);

      config.res.render('informacion-abogados',{datos:respuesta[0],imagen:resultado[0].imagenes});
    });
  });
}

module.exports = datos;
