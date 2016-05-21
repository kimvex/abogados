import $ from 'jquery';

var cliente = ()=>{
  function informacion(e){
    $.get('/informacion-personal',function(data){
      document.getElementById('contenido-clientes').innerHTML = data;
    });
    e.preventDefault();
  } 
  function casos(e){
    $.get('/casos',function(data){
      document.getElementById('contenido-clientes').innerHTML = data;
    });
    e.preventDefault();
  } 
  function citas(e){
    $.get('/citas',function(data){
      document.getElementById('contenido-clientes').innerHTML = data;
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

export default cliente;
