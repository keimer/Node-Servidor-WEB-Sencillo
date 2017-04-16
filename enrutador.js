//var peticiones = require("./peticiones");

function enrutar(controlador, ruta, respuesta) {
    
    if (typeof controlador[ruta] === 'function'){
        //console.log(`Será enrutado para el URL: ${ruta}, usando la Function = ${controlador[ruta](respuesta)}`);
        controlador[ruta](respuesta);
    }else{
        console.log(`La URL " ${ruta} " no existe en nuestro site, intente digitar una ruta valida`);
    }
}

exports.enrutar = enrutar;