"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
//ruta de origen
let ruta1 = process.argv[2];
//ruta de destino
let ruta2 = process.argv[3];
let ArchivoOrigen = ruta1;
let ArchivoDestino = ruta2;
let argu = '';
//usando la funcion readFileSync para leer el archivo 
const midata = fs.readFileSync(ArchivoOrigen, 'utf-8');
argu = midata;
fs.writeFileSync(ArchivoDestino, midata);
// Comando
// npm run --silent cp ORIGNEN DESTINO
// ejemplo:
// npm run --silent cp ./pru.txt ./name.txt
// output: archivo copiado
