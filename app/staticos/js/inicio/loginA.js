import $ from 'jquery';

const abogadoLog = ()=>{
  if(localStorage['lugar'] == 'inicio'){

    function logAb(e){

      let datos = {
        usuario: $('#usuario-abogado').val(),
        pass: $('#pass-ab').val()
      }

      $.ajax('/login-ab',{
        type: 'post',
        dataType: 'json',
        data: datos,
        success: datos =>{
          if(datos == '=>'){
            window.location = '/perfil-abogados'
          }
          if(datos == '<='){
            $('#err-abogado').html('Correo incorrecto');
          }

          if(datos == '<<='){
            $('#err-abogado').html('Contraseña incorrecta');
          }
        }
      });

      e.preventDefault();
    }

    $('#login-abogado').submit(logAb);
  }
}

export default abogadoLog;
