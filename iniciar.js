var server =  require("./servidor");
var enrutador = require("./enrutador");
var peticiones = require("./peticiones");

var controlador = {};
controlador['/'] = peticiones.inicio;
controlador['/pagina1'] = peticiones.pagina1;
controlador['/pagina2'] = peticiones.pagina2;
//controlador['/favicon'] = peticiones.favicon;

server.iniciar(enrutador.enrutar, controlador);