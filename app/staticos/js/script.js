import $ from 'jquery';
import login from './inicio/login';
import clientes from './clientes/clientes';
import registros from './registro/registro';
import abogados from './abogados/abogados.js';
import logA from './inicio/loginA';

$(document).ready(()=>{
	login();
  logA();
  clientes();
  registros();
  abogados();
});
