const sql = require('mssql');

const solicitud = function(config){
  config = config || {};

  const request = new sql.Request();
  request.query("select * from citas",(err,respuesta)=>{
    if(err){
      throw err;
    }
    console.log(respuesta);
    console.log(respuesta[0]);
    request.query("select * from abogados",(error,resultado)=>{
      if(err){
        throw err;
      }
      console.log(resultado);
      config.res.render('solicitudes',{citas:respuesta,abogados:resultado});
    });
  });
}

module.exports = solicitud;
