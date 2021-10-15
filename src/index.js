import cipher from './cipher.js';
// console.log(cipher);
import functionalities from './btnsFunctionality.js';

const encodedInput = document.getElementById('ingresar-texto-decodificado');
let offsetInput = document.getElementById('offset');

encodedInput.addEventListener('input', ()=>{cipher.codificar(encodedInput,offsetInput)} )

const changeWindows = document.getElementById('change-windows');
changeWindows.addEventListener('click', functionalities.cambiarVentanas)



const cleanInputs = document.getElementById('clean-inputs');
cleanInputs.addEventListener('click', functionalities.limpiarVentanaDecodificada);


offsetInput.addEventListener('input', () => {functionalities.offsetChanges(encodedInput,offsetInput)});







// let decodeTextBtn = document.getElementById('prueba');


// decodeTextBtn.addEventListener('click',()=>{cipher.codificar(encodedInput,offsetInput)});








// const decodedInput = document.getElementById('enterEncodedText');
// let encodeTextBtn = document.getElementById('encode-btn');

// encodeTextBtn.addEventListener('click', ()=>{cipher.decodificar(decodedInput)});
