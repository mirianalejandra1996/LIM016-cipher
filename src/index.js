import cipher from './cipher.js';
import {functionalitiesEncodedToDecoded,functionalitiesDecodedToEncoded} from './btnsFunctionality.js';


// Ventana decoded-to-encoded
let enterDecodedInput = document.getElementById('ingresar-texto-decodificado');
const decodedOffsetInput = document.getElementById('encoded-offset');

enterDecodedInput.addEventListener('input', ()=>{cipher.codificar(enterDecodedInput,decodedOffsetInput)} );

const changeWindowsToDecoded = document.getElementById('change-windows-to-decoded');
changeWindowsToDecoded.addEventListener('click', functionalitiesEncodedToDecoded.changeToDecoded);

const cleanDecodedInput = document.getElementById('clean-decoded-input');
cleanDecodedInput.addEventListener('click', functionalitiesEncodedToDecoded.limpiarVentanaDecodificada);

decodedOffsetInput.addEventListener('input', () => {functionalitiesEncodedToDecoded.encodedOffsetChanges(enterDecodedInput,decodedOffsetInput)});

// ----------------------------------


// Ventana encoded-to-decoded

// let enterEncodedInput = document.getElementById('ingresar-texto-codificado');
// const encodedOffsetInput = document.getElementById('decoded-offset');

// enterEncodedInput.addEventListener('input', ()=>{cipher.decodificar(enterEncodedInput,encodedOffsetInput)});

const changeWindowsToEncoded = document.getElementById('change-windows-to-encoded');
changeWindowsToEncoded.addEventListener('click', functionalitiesDecodedToEncoded.changeToEncoded);








// function probandoDecodificar (text,offset){
//     cipher.decodificar(text,offset);
// }

// probandoDecodificar('HI JK','7');

