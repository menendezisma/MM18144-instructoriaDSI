import * as fs from 'fs';

//ruta de origen
let ruta1: string=process.argv[2];
//ruta de destino
let ruta2: string=process.argv[3];

let ArchivoOrigen: string = ruta1;
let ArchivoDestino: string = ruta2;
let argu: string='';
//usando la funcion readFileSync para leer el archivo 
const midata=fs.readFileSync(ArchivoOrigen, 'utf-8');
argu=midata;
fs.writeFileSync(ArchivoDestino, midata);

// Comando
// npm run --silent cp ORIGNEN DESTINO

// ejemplo:
// npm run --silent cp ./pru.txt ./name.txt
// output: archivo copiado