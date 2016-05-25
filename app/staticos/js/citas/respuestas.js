import $ from 'jquery';

var respuestas = ()=>{
  $.get('/solicitud',(data)=>{
    console.log(data);
    var cit;
    for(var i in data){
      if(cit == undefined){
        cit = '<ul class="solicitudes-estado-t"><li class="asunto-solicitud-t">'+data[i].asunto+'</li><li class="fecha-solicitud-t">'+data[i].cc+'</li><li class="estado-solicitud-t">'+data[i].id+'</li></ul>';

      }else{
        cit = cit + '<ul class="solicitudes-estado-t"><li class="asunto-solicitud-t">'+data[i].asunto+'</li><li class="fecha-solicitud-t">'+data[i].cc+'</li><li class="estado-solicitud-t">'+data[i].id+'</li></ul>';
      }
    }

    document.getElementById('solicitudes').innerHTML = cit;
  });
}

export default respuestas;
