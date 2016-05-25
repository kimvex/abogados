var db          = require('../controllers/db'),
    sql         =  require('mssql'),
    moment      = require('moment'),
    validar     = require('../../middlewares/iniciado'),
    Registro    = require('../controllers/registro'),
    Informacion = require('../models/informacionPersonal'),
    Cita        = require('../models/cita');

var dbis = new db();
var rutas = function(config){
  config = config || {};

  config.app.get('/',validar.noIniciado,(sol,res,next)=>{
    res.render('index');
    console.log(sol.session.name);
    console.log(sol.session.cookie.expires);
  });

  config.app.get('/perfil',validar.iniciado,(sol,res,next)=>{
    res.render('clientes');
  });

  config.app.get('/informacion-personal',validar.iniciado,(sol,res,next)=>{
    var datos = {
      sol: sol,
      res: res
    }

    var datosPersonales = new Informacion(datos);
  });

  config.app.get('/casos',validar.iniciado,(sol,res,next)=>{
    res.render('casos');
  });  

  config.app.get('/citas',(sol,res,next)=>{
    res.render('citas');
  });  

  config.app.get('/perfil-abogados',(sol,res,next)=>{
    res.render('abogados-perfil');
  }); 

  config.app.get('/casos-abogados',(sol,res,next)=>{
    res.render('casos-abogados');
  });  
  config.app.get('/solicitudes',(sol,res,next)=>{
    res.render('solicitudes');
  });  
  config.app.get('/informacion-abogados',(sol,res,next)=>{
    res.render('informacion-abogados');
  });

  config.app.get('/salir',validar.iniciado,(sol,res,next)=>{
    sol.session.destroy();
    res.redirect('/');
  });
  //Post

  config.app.post('/login',(sol,res,next)=>{

      var request = new sql.Request();
      request.query("select * from clientes2 where correo='"+sol.body.usuario+"'",function(err,datos){
        if(err){
          console.log(err);
        }

        console.log(datos);
        request.query("select * from clientes2 where correo='"+datos[0].correo+"' and contrasena='"+sol.body.pass+"'",function(error,respuesta){
          if(error){
            console.log(error);
          }
          sol.session.name = respuesta[0].correo;
          sol.session.cookie.expires = moment().add(14,'days').unix();
          res.json('=>');
        });
      });

  });


  config.app.post('/registrar',(sol,res,next)=>{
    
    var datos = {
      sol: sol,
      res: res
    }
   
   var registrar = new Registro(datos);
  });

  config.app.post('/cita',(sol,res,next)=>{
    var datos = {
      sol: sol,
      res: res
    }

    var citas = new Cita(datos);

  });

}

module.exports = rutas;
