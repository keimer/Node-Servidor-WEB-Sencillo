var servidor = require("http"); //Se encarga de servir web, recibe una petición y entraga una página
var url = require("url"); //se encarga de registrar una dirección un URL y asignarle a dicha URL un comportamiento personalizado
var fs = require('fs'); //Permite leer y escribir archivos

//Inicia el servidor en el puerto 8888 con un mensaje.
function iniciar(enrutar, controlador){
    function arrancarServidor(request, respuesta) {
        var rutaCapturada = url.parse(`http://localhost:8888${request.url}`);
        //console.log(`rutaCapturada = ${rutaCapturada.pathname}`);
        //console.log(`rutaCapturada = ${rutaCapturada.port}`);
        var ruta = rutaCapturada.pathname;
        //var contenido = enrutar(controlador, ruta, respuesta);
        enrutar(controlador, ruta, respuesta);

        //var page = fs.readFileSync()

        //crear un registro de los Request solicitados al servidor
        var registro = fs.createWriteStream('resgistro.txt',{'flags':'a'});
        registro.write(`ruta = ${ruta}. '\n'`);
        //registro.write(`ruta = ${ruta} -- ${contenido}. '\n'`);

        //console.log("Alguien se acaba de conectar a nuestro servidor");
        /*respuesta.writeHead(200,{"Content-Type":"text/html"});
        respuesta.write(`<h1>${contenido}</h1>`);
        respuesta.end();*/
    }

    servidor.createServer(arrancarServidor).listen(8888);
}

exports.iniciar = iniciar;

