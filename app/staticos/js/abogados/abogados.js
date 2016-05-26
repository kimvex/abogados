import $ from 'jquery';
import abogCita from './solicitudes';
import nuevo from '../admin/registro';

var aboga = ()=>{
	function casosAbogados(e){	
		$.get('/casos-abogados',function(dato){
			localStorage['lugar-peq'] = 'casoAb';
			document.getElementById('contenido-abogado').innerHTML = dato;
		});
		e.preventDefault();
	}

	function solicitud(e){	
		$.get('/solicitudes',function(dato){
			localStorage['lugar-peq'] = 'solicitudAb';
			document.getElementById('contenido-abogado').innerHTML = dato;
		  abogCita();
		});
		e.preventDefault();
	}	
	function informacionAbogado(e){	
		$.get('/informacion-abogados',function(dato){
			localStorage['lugar-peq'] = 'infoAbogado';
			document.getElementById('contenido-abogado').innerHTML = dato;
		});
		e.preventDefault();
	}	
	function nuevoAbogado(e){	
		$.get('/nuevo-abogado',function(dato){
			localStorage['lugar-peq'] = 'nuevo';
			document.getElementById('contenido-abogado').innerHTML = dato;
			nuevo();
		});
		e.preventDefault();
	}

   $("#informacion-abogado").click(informacionAbogado);
   $("#casos").click(casosAbogados);
   $("#solicitud-abogado").click(solicitud);
   $("#registro-abogado").click(nuevoAbogado);

	$.get('/informacion-abogados',function(dato){
		localStorage['lugar-peq'] = 'infoAbogado';
		document.getElementById('contenido-abogado').innerHTML = dato;
	});

	console.log("dfsf");
}

export default aboga;
