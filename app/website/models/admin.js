const sql = require('mssql');

const admin = function(config){
  config = config || {};

  const request = new sql.Request();
  request.query("select * from abogados where correo='"+config.sol.session.name+"'",(err,respuesta)=>{
    if(err){
      throw err;
    }
    console.log(__dirname);
    if(respuesta[0].admin == 0){
      config.res.render('abogados-perfil',{admin:0});
    }else{
      config.res.render('abogados-perfil',{admin:1});
    }
  });
}

module.exports = admin;
