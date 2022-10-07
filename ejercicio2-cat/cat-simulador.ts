import { promises as fsPromises } from 'fs';
import * as path from 'path';

//se obtiene la direccion del archivo
const direccionArchivo = path.resolve(__dirname, process.argv[2]);

(async () => {
    //variable data en la cual se almacena el valor de la lectura
    //readFile para leer el archivo con los parametros de la direccion del archivo y 'utf-8' para la lectura
    const data = await fsPromises.readFile(direccionArchivo, 'utf8');
    console.log(data);
})();


// para ejecutar el comando:
// npm run --silent cat ../hola.txt
