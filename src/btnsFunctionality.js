const limpiarVentana = () => {

    const upperWindow = document.getElementById('ingresar-texto-decodificado');
    const lowerWindow = document.getElementById('resultado-codificado');

    upperWindow.value='';
    lowerWindow.value='';
};


const cambiarVentanas = () => {
    console.log('Cambiando ventanas');
};

const functionalities = {
    limpiarVentana,
    cambiarVentanas
};

export default functionalities;