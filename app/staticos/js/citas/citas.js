import $ from 'jquery';

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
        }
      });

      e.preventDefault();
    }

    $("#formulario-cita").submit(enviar);
  }
}

export default citas;
