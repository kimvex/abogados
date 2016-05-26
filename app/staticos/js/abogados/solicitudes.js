import $ from 'jquery';

var solicitud =()=>{

  function desplegar(e){
    $('#1').fadeToggle();
    e.preventDefault();
  }
  console.log("dfd");
  $('#abogado-solicitud-t').click(desplegar);
}

export default solicitud;
