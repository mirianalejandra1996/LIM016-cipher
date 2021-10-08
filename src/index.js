import cipher from './cipher.js';

console.log(cipher);


const encodeInput = document.getElementById('enterEncodedText');
let decodeBtn = document.getElementById('decode-btn');

decodeBtn.addEventListener('click',()=>{codificar(encodeInput)});

function codificar(text){
    
    const encodedArray = text.value.split('');
    console.log(encodedArray);
    
    let decodeTextResult = '';

    for (let letter of encodedArray){

        console.log(letter);
        
        let letterDecodedPosition = letter.charCodeAt(0);
        console.log(letterDecodedPosition);
        
        let encodedFormula = (letterDecodedPosition - 65 + 33) % 26 + 65;
        console.log(encodedFormula);

        let encodedLetter = String.fromCharCode(encodedFormula);
        console.log(encodedLetter);
        
        decodeTextResult+=encodedLetter;

    }    
  
    console.log(decodeTextResult);

    let decodeWindow = document.getElementById('encoded');
    decodeWindow.innerHTML = decodeTextResult; 
}