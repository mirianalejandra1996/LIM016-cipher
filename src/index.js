import cipher from './cipher.js';

// Ventana decoded-to-encoded

let isEncode = true //puede tomar valores: 'codificar'o 'descodificar'
let message = document.getElementById('texto');
const offset = document.getElementById('offset');

const codeOrEncode = () => {

    let decodedTex = isEncode ? cipher.codificar(message, offset) : cipher.decodificar(message, offset);
    
    let resultado = document.getElementById('resultado');
    resultado.value = decodedTex;
}

message.addEventListener('input', codeOrEncode);

offset.addEventListener('input', codeOrEncode);


const toggleBtn = document.getElementById('change-windows');

toggleBtn.addEventListener('click', () => {
    isEncode = !isEncode;
    // console.log('isEncode: ', isEncode);
    
    let upperBtn = document.getElementById('upper-btn');
    let lowerBtn = document.getElementById('lower-btn');

    let lowerTab = document.getElementById('lower-tab');
    let upperTab = document.getElementById('upper-tab');

    message.value = '';
    offset.value = 0;

    if (isEncode){
        upperBtn.className = 'icon-a-letter-icon';
        lowerBtn.className = 'icon-chinese-letter-icon';
        upperTab.innerHTML = 'Decodificado';
        lowerTab.innerHTML = 'Codificado';
    } else {
        upperBtn.className = 'icon-chinese-letter-icon';
        lowerBtn.className = 'icon-a-letter-icon';
        upperTab.innerHTML = 'Codificado';
        lowerTab.innerHTML = 'Decodificado';
    }

    codeOrEncode();

});

const cleanInput = document.getElementById('clean');

cleanInput.addEventListener('click', () => {
    document.getElementById('texto').value = '';
    document.getElementById('resultado').value = '';


});
