import cipher from './cipher.js';

console.log(cipher);


const encodedInput = document.getElementById('ingresar-texto-decodificado');
let decodeTextBtn = document.getElementById('btn-traducir');


decodeTextBtn.addEventListener('click',()=>{cipher.codificar(encodedInput)});


// const decodedInput = document.getElementById('enterEncodedText');
// let encodeTextBtn = document.getElementById('encode-btn');

// encodeTextBtn.addEventListener('click', ()=>{cipher.decodificar(decodedInput)});
