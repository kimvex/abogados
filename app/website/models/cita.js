var db = require('../controllers/db'),
    sql= require('mssql');

var cita = function(config){
  config = config || {};
  console.log(config.sol.body);
  config.res.send(config.sol.body);

  var request = new sql.Request();
  var datos = "'"+config.sol.body.asunto+"','"+config.sol.body.cc+"','"+config.sol.body.fecha+"','"+config.sol.session.name+"'";
  request.query("insert into citas (asunto,cc,fecha,correo) values("+datos+")",(err,respuesta)=>{
    if(err){
      throw err;
    }else{
      config.res.send('cita hecha espera la respuesta');
    }

  });
}

module.exports = cita;
