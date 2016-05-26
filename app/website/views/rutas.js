var db          = require('../controllers/db'),
    sql         =  require('mssql'),
    moment      = require('moment'),
    validar     = require('../../middlewares/iniciado'),
    Registro    = require('../controllers/registro'),
    Informacion = require('../models/informacionPersonal'),
    Cita        = require('../models/cita'),
    Solicitud   = require('../models/solicitudes'),
    AbLog       = require('../controllers/loginA'),
    InfoAboga   = require('../models/informacionAbogado'),
    Admin       = require('../models/admin'),
    RegistroAb  = require('../models/registroAb'),
    SolAb       = require('../models/solAb');

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

  config.app.get('/citas',validar.iniciado,(sol,res,next)=>{
    res.render('citas');
  });  

  config.app.get('/perfil-abogados',validar.iniciado,(sol,res,next)=>{
    const datos = {
      sol: sol,
      res: res
    }

    const adm = new Admin(datos);
  }); 

  config.app.get('/casos-abogados',validar.iniciado,(sol,res,next)=>{
    res.render('casos-abogados');
  });  
  config.app.get('/solicitudes',validar.iniciado,(sol,res,next)=>{
    const datos = {
      sol: sol,
      res:res
    }
    const solA = new SolAb(datos);
  });  
  config.app.get('/informacion-abogados',validar.iniciado,(sol,res,next)=>{
    var datos = {
      sol: sol,
      res: res
    }

    var info = new InfoAboga(datos);
  });  
  config.app.get('/nuevo-abogado',validar.iniciado,(sol,res,next)=>{
    res.render('nuevo-abogado');
  });

  config.app.get('/solicitud',validar.iniciado,(sol,res,next)=>{
    var datos = {
      sol: sol,
      res: res
    }

    var solicitudes = new Solicitud(datos);
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

        if(datos[0] == undefined){
          res.json('<=');
        }else{        
          request.query("select * from clientes2 where correo='"+datos[0].correo+"' and contrasena='"+sol.body.pass+"'",function(error,respuesta){
            if(error){
              console.log(error);
            }
            if(respuesta[0] == undefined){
              res.json('==>');
            }else{          
              sol.session.name = respuesta[0].correo;
              sol.session.cookie.expires = moment().add(14,'days').unix();
              res.json('=>');
            }
          });
        }
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


  //Login abogados
  config.app.post('/login-ab',(sol,res,next)=>{
    var datos = {
      sol: sol,
      res: res
    }

    var login = new AbLog(datos);
  });

  config.app.post('/nuevo-ab',(sol,res,next)=>{
    const datos = {
      sol:sol,
      res: res
    }

    const registro = new RegistroAb(datos);
  });

  config.app.post('/asignarAb',(sol,res,next)=>{
    console.log(sol.body);
  });
}

module.exports = rutas;
