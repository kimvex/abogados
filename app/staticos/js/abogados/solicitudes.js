import $ from 'jquery';

var solicitud =()=>{
  function enviarDatos(e){
    var idd = String(e.target.id + 1);
    console.log(idd);
    console.log($("#"+idd+"").val());
    console.log(document.getElementById(idd).value);
    e.preventDefault();
  }
  $(".form-solicitudes-abogado").submit(enviarDatos);
}

export default solicitud;
