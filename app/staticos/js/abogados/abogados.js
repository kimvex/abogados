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

   $("#casos").click(casosAbogados);
   $("#solicitud-abogado").click(solicitud);

	$.get('/solicitudes',function(dato){
		document.getElementById('contenido-abogado').innerHTML = dato;
	});
	e.preventDefault();

});