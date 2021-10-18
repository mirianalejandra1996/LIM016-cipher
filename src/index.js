import cipher from './cipher.js';
import { functionalitiesEncodedToDecoded, functionalitiesDecodedToEncoded } from './btnsFunctionality.js';


// Ventana decoded-to-encoded
let isEncode = true//puede tomar valores: 'codificar'o 'descodificar'
let message = document.getElementById('texto');
const offset = document.getElementById('encoded-offset');

const codeOrEncode = () => {
    let decodedTex = isEncode ? cipher.codificar(message, offset) : cipher.decodificar(message, offset)
    
    let resultado = document.getElementById('resultado');
    resultado.value = decodedTex;
}

message.addEventListener('input', codeOrEncode);

offset.addEventListener('input', codeOrEncode);


const toggleBtn = document.getElementById('change-windows');

toggleBtn.addEventListener('click', () => {
    isEncode = !isEncode
    console.log('isEncode: ', isEncode);
    codeOrEncode()

});

const cleanInput = document.getElementById('clean-decoded-input');
cleanInput.addEventListener('click', () => {
    document.getElementById('texto').value = '';
    document.getElementById('resultado').value = '';


});


// ----------------------------------


// Ventana encoded-to-decoded

// let enterEncodedInput = document.getElementById('ingresar-texto-codificado');
// const encodedOffsetInput = document.getElementById('decoded-offset');


// enterEncodedInput.addEventListener('input', ()=>{

//     let encodedText = cipher.decodificar(enterEncodedInput,encodedOffsetInput);

//     let resultadoDecodificado=document.getElementById('resultado-decodificado');
//     resultadoDecodificado.value = encodedText;

// });

// const changeWindowsToEncoded = document.getElementById('change-windows-to-encoded');
// changeWindowsToEncoded.addEventListener('click', functionalitiesDecodedToEncoded.changeToEncoded);

// const cleanEncodedInput = document.getElementById('clean-encoded-input');
// cleanEncodedInput.addEventListener('click', functionalitiesDecodedToEncoded.limpiarVentanaCodificada);

// encodedOffsetInput.addEventListener('input', () => {

//     // console.log('inpuuuut');

//     // let decodedText = cipher.decodificar(enterEncodedInput,encodedOffsetInput);

//     // let resultadoCodificado = document.getElementById('resultado-codificado');
//     // resultadoCodificado.value = decodedText;
// });






// function probandoDecodificar (text,offset){
//     cipher.decodificar(text,offset);
// }

// probandoDecodificar('HI JK','7');