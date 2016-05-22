import $ from 'jquery';
import login from './inicio/login';
import clientes from './clientes/clientes';
import registros from './registro/registro';

$(document).ready(()=>{
	login();
  clientes();
  registros();
});
