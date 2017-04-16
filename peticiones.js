// ***************   Vistas   **********************
var fs = require('fs'); //Permite leer y escribir archivos

function inicio(respuesta){
    
    // var ahora = new Date().getTime();
    // console.log(`ahor= ${ahora} -- ${new Date().getTime()}`);
    // while (new Date().getTime() < ahora + 15000) {
    // }
    
    console.log("Entraste al HOME del site");
    
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write(fs.readFileSync('www/index.html'));
    respuesta.end();
    
    //return "Inicio";
}

function pagina1(respuesta){
    console.log("Entraste a la página 1 de nuestro site")
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write(fs.readFileSync("www/pag1.html"));
    respuesta.end();
    //return "Página 1";
}

function pagina2(respuesta){
    console.log("Entraste a la página 2 de nuestro site")
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write(fs.readFileSync("www/pag2.html"));
    respuesta.end();
    //return "Página 2";
}

// function favicon(respuesta){
//     console.log("Solicitando Favicon");
//     respuesta.writeHead(200,{"Content-Type":"text/html"});
//     respuesta.write("");
//     respuesta.end();
// }

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
//exports.favicon = favicon;