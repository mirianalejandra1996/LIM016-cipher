import cipher from './cipher.js';
import {functionalitiesEncodedToDecoded,functionalitiesDecodedToEncoded} from './btnsFunctionality.js';


// Ventana decoded-to-encoded
let enterDecodedInput = document.getElementById('ingresar-texto-decodificado');
const decodedOffsetInput = document.getElementById('encoded-offset');

enterDecodedInput.addEventListener('input', () => {
    
    let decodedText = cipher.codificar(enterDecodedInput,decodedOffsetInput);

    let resultadoCodificado = document.getElementById('resultado-codificado');
    resultadoCodificado.value = decodedText;
});


const changeWindowsToDecoded = document.getElementById('change-windows-to-decoded');
changeWindowsToDecoded.addEventListener('click', functionalitiesEncodedToDecoded.changeToDecoded);

const cleanDecodedInput = document.getElementById('clean-decoded-input');
cleanDecodedInput.addEventListener('click', functionalitiesEncodedToDecoded.limpiarVentanaDecodificada);

decodedOffsetInput.addEventListener('input', () => {
    
    let decodedText = cipher.codificar(enterDecodedInput,decodedOffsetInput);

    let resultado = document.getElementById('resultado-codificado');
    resultado.value = decodedText;
});
// ----------------------------------


// Ventana encoded-to-decoded

// let enterEncodedInput = document.getElementById('ingresar-texto-codificado');
const encodedOffsetInput = document.getElementById('decoded-offset');


// enterEncodedInput.addEventListener('input', ()=>{
    
//     let encodedText = cipher.decodificar(enterEncodedInput,encodedOffsetInput);

//     let resultadoDecodificado=document.getElementById('resultado-decodificado');
//     resultadoDecodificado.value = encodedText;

// });

const changeWindowsToEncoded = document.getElementById('change-windows-to-encoded');
changeWindowsToEncoded.addEventListener('click', functionalitiesDecodedToEncoded.changeToEncoded);

const cleanEncodedInput = document.getElementById('clean-encoded-input');
cleanEncodedInput.addEventListener('click', functionalitiesDecodedToEncoded.limpiarVentanaCodificada);

encodedOffsetInput.addEventListener('input', () => {
    
    // console.log('inpuuuut');

    // let decodedText = cipher.decodificar(enterEncodedInput,encodedOffsetInput);

    // let resultadoCodificado = document.getElementById('resultado-codificado');
    // resultadoCodificado.value = decodedText;
});






// function probandoDecodificar (text,offset){
//     cipher.decodificar(text,offset);
// }

// probandoDecodificar('HI JK','7');