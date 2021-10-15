import cipher from './cipher.js';

const limpiarVentanaDecodificada = () => {

    const upperWindow = document.getElementById('ingresar-texto-decodificado');
    const lowerWindow = document.getElementById('resultado-codificado');

    upperWindow.value='';
    lowerWindow.value='';
};


const cambiarVentanas = () => {
    console.log('Cambiando ventanas');
};

const offsetChanges = (text, offset) => {
    console.log('Estamos cambiando el offset');

    cipher.codificar(text,offset)

}

const functionalities = {
    limpiarVentanaDecodificada,
    cambiarVentanas,
    offsetChanges
};

export default functionalities;