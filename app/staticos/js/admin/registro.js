import $ from 'jquery';

const nuevo = ()=>{
  if(localStorage['lugar-peq'] == 'nuevo'){

    function registroAb(e){
      if($('#pass1-abogado').val() == $('#pass2-abogado').val()){
        let datos = {
          nombre: $('#nombre-abogado').val(),
          apellido: $('#apellido-abogado').val(),
          fecha: $('#nacimiento-abogado').val(),
          domicilio: $('#domicilio-abogado').val(),
          sexo: $('#sexo-abogado').val(),
          cedula: $('#cedula-abogado').val(),
          rfc: $("#rfc-abogado").val(),
          experiencia: $("#experiencia-abogado").val(),
          ciudad: $("#ciudad-abogado").val(),
          telefono: $("#telefono-abogado").val(),
          correo: $("#correo-abogado").val(),
          pass: $('#pass1-abogado').val()
        }

        $.ajax('/nuevo-ab',{
          type: "post",
          dataType: 'json',
          data: datos,
          success: dato =>{
            console.log(dato);
            if(dato == '=>'){
              $('#registro-abogados').html('<h1>Registro Realizado</h1>');
            }else if(dato == '<='){
              $('#fallo-resgitro').html('<h1>Fallo el registro</h1>');
            }else if(dato == '<<='){
              $('#fallo-resgitro').html('<h1>El correo ya existe</h1>');
            }
          }
        });
      }else{
        $('#fallo-resgitro').html('<h1>Las contraseñas son incorrectas</h1>');
      }
      e.preventDefault();
    }

    $("#registro-abogados").submit(registroAb);
  }
}

export default nuevo;
