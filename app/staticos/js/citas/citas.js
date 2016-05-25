import $ from 'jquery';
import resp from './respuestas';

var citas = ()=>{
  if(localStorage['lugar-peq'] == 'citas'){
    function enviar(e){
      var datos = {
        asunto: $("#asunto").val(),
        cc: $("#cc").val(),
        fecha: $("#fecha-cita").val()
      }
      $.ajax('/cita',{
        type: 'POST',
        dataType: 'json',
        data:datos,
        success: (data)=>{
          console.log(data);
          resp();
        }
      });
      e.preventDefault();
    }
    $("#formulario-cita").submit(enviar);
    resp();

  }
}

export default citas;
