$(function(){

	function casosAbogados(e){	
		$.get('/casos-abogados',function(dato){
			document.getElementById('contenido-abogado').innerHTML = dato;
		});
		e.preventDefault();
	}

	function solicitud(e){	
		$.get('/solicitudes',function(dato){
			document.getElementById('contenido-abogado').innerHTML = dato;
		});
		e.preventDefault();
	}	
	function informacionAbogado(e){	
		$.get('/informacion-abogados',function(dato){
			document.getElementById('contenido-abogado').innerHTML = dato;
		});
		e.preventDefault();
	}	
	function nuevoAbogado(e){	
		$.get('/nuevo-abogado',function(dato){
			document.getElementById('contenido-abogado').innerHTML = dato;
		});
		e.preventDefault();
	}

   $("#informacion-abogado").click(informacionAbogado);
   $("#casos").click(casosAbogados);
   $("#solicitud-abogado").click(solicitud);
   $("#registro-abogado").click(nuevoAbogado);

	$.get('/informacion-abogados',function(dato){
		document.getElementById('contenido-abogado').innerHTML = dato;
	});

});