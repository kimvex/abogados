import $ from 'jquery';

var login = ()=>{

  function iniciar(e){
    var usuario = document.getElementById('usuario').value,
        pass    = document.getElementById('pass').value;


    $.ajax('/login',{
      type: 'post',
      dataType: 'json',
      data: {
        usuario: usuario,
        pass: pass
      },
      success: (data)=>{
        if(data == '=>'){
          window.location = '/perfil';
        }
        if(data == '==>'){
          document.getElementById('er').innerHTML = "Contraseña Incorrecta";
        }
        if(data == '<='){
          document.getElementById('er').innerHTML = "Correo incorrecto";
        }
      }
    });

    e.preventDefault();
  }

  $("#login").submit(iniciar);
}

export default login;
