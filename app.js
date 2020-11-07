//requireds


const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


// Require de File System
// const fs = require('fs');
// const fs = require('express'); Es un paquete que se instala
// const fs = require('fs'); Son require de archivos de nuestro mismo proyecto


// console.log(multiplicar);
// let base = 2;

//Variables globales de node, se ejecutan siempre
// console.log(process);  Informacion del entorno de ejecución OS, arquitectura
// console.log(module); 
// console.log(global); Variable global, es el equivalente a window

// Aquí se reciben los argumentos cuando se ejecuta el programa ejemplo node app --argumento 
// console.log(process.argv);

// let argv2 = process.argv;
// base = argv2[2].split('=')[1];
// console.log("base : ", base);


/****Con la configuracion del yargs y apodemos mandar el comando listar y dentro nos pedira la base 
 * y ya podemos acceder a el por medio de la variable argv.base */
// console.log("Argv :", argv);
// console.log("Argv2 :", argv2);

//Obteniendo los argumentos generales, en este caso seran listar o crear
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo: ${archivo} se creó con éxito.`))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");

}