import $ from 'jquery';
import cit from '../citas/citas';

var cliente = ()=>{
  if(localStorage['lugar'] == 'perfil'){
    function informacion(e){
      $.get('/informacion-personal',function(data){
        document.getElementById('contenido-clientes').innerHTML = data;
      });
      e.preventDefault();
    } 
    function casos(e){
      $.get('/casos',function(data){
        localStorage['lugar-peq'] = "citaaa";
        document.getElementById('contenido-clientes').innerHTML = data;
      });
      e.preventDefault();
    } 
    function citas(e){
      $.get('/citas',function(data){
        localStorage['lugar-peq'] = "citas";
        document.getElementById('contenido-clientes').innerHTML = data;
        cit();
      });
      e.preventDefault();
    }

    $("#inf-personal").click(informacion);
    $("#casos").click(casos);
    $("#citas").click(citas);

    
    $.get('/informacion-personal',function(data){
      document.getElementById('contenido-clientes').innerHTML = data;
    });
  }
}

export default cliente;
