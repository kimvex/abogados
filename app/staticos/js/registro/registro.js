import $ from 'jquery';

var registro = ()=>{
  if(localStorage['lugar']=='inicio'){

    function registrar(e){
      console.log(document.getElementById('pass1').value );
      console.log(document.getElementById('pass2').value );
      if(document.getElementById('pass1').value == document.getElementById('pass2').value){
        var datos = {
          nombre:document.getElementById('nombre').value,
          apellido:document.getElementById('apellido').value,
          nacimiento:document.getElementById('nacimiento').value,
          domicilio:document.getElementById('domicilio').value,
          sexo:document.getElementById('sexo').value,
          ocupacion:document.getElementById('ocupacion').value,
          ciudad:document.getElementById('ciudad').value,
          telefono:document.getElementById('telefono').value,
          correo:document.getElementById('correo').value,
          pass:document.getElementById('pass1').value
        }
        $.ajax('/registrar',{
          type:'post',
          dataType:'json',
          data:datos,
          success:(data)=>{
            console.log(data);
          }
        });
      }else{
        document.getElementById('fallo').innerHTML = '<p>Las contraseñas con coinciden</p>';
      }

      e.preventDefault();
    }

    document.getElementById('registro').addEventListener('submit',registrar);
  }

}

export default registro;
