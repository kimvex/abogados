module.exports = {
  iniciado: (sol,res,next)=>{
    if(sol.session.name){
      next();
    }else{
      res.redirect('/');
    }
  },
  noIniciado: (sol,res,next)=>{
    if(sol.session.name){
      res.redirect('/perfil')
    }else{
      next();
    }
  }
}
