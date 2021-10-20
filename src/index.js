import cipher from './cipher.js';

// Ventana decoded-to-encoded

let isEncode = true //puede tomar valores: 'codificar'o 'descodificar'

let translateBtn = document.getElementById('translate');

const codeOrEncode = () => {

    let message = document.getElementById('texto').value;
    let offset = document.getElementById('offset').value;

    let decodedTex = isEncode ? cipher.encode(offset,message) : cipher.decode(offset,message);
    
    let resultado = document.getElementById('resultado');
    resultado.value = decodedTex;
}

// message.addEventListener('input', codeOrEncode);
translateBtn.addEventListener('click', codeOrEncode);

// offset.addEventListener('input', codeOrEncode);


const toggleBtn = document.getElementById('change-windows');

toggleBtn.addEventListener('click', () => {
    isEncode = !isEncode;
    
    let upperBtn = document.getElementById('upper-btn');
    let lowerBtn = document.getElementById('lower-btn');

    let lowerTab = document.getElementById('lower-tab');
    let upperTab = document.getElementById('upper-tab');

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

    // codeOrEncode();
    cleanCiphaer();

});

const cleanInputs = document.getElementById('clean');

const cleanCiphaer = () => {
    document.getElementById('texto').value = '';
    document.getElementById('resultado').value = '';
}

cleanInputs.addEventListener('click', cleanCiphaer);

// cleanInputs.addEventListener('click', () => {
//     document.getElementById('texto').value = '';
//     document.getElementById('resultado').value = '';

// });
