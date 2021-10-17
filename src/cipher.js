// Codigo para decodificar
// let decodedFormula = (letterDecodedPosition - 65 - chosenOffset ) % 26 + 65;


const codificar = (text, offset) => {
  
  console.log('tecleando en codificar');

  let chosenOffset = parseInt(offset.value);
  const encodedArray = text.value.trim().split('');
  console.log(encodedArray);

  if (encodedArray.length === 0){
    console.log('Está vacio este array')
    let empty=document.getElementById('resultado-codificado');
    empty.value = '';
  } else {
  
  console.log('si tiene elementos este array');

  // if(chosenOffset < 0){
  //   console.log('entramos')
  //   console.log(chosenOffset);
  //   chosenOffset *=  -1;
  //   console.log(chosenOffset);
  // }

    let decodeTextResult = '';
    // ! NO TOCAR
    for (let letter of encodedArray){

        let letterDecodedPosition = letter.charCodeAt(0);

        // Están consideradas solamente las letras que conforman el abecedario en mayúscula y en minúscula.

        if (letterDecodedPosition >= 65 && letterDecodedPosition <= 90){
          
          // si la letra es mayúscula
          let encodedFormula = (letterDecodedPosition - 65 + chosenOffset ) % 26 + 65;
          let upperCaseLetter = String.fromCharCode(encodedFormula);
          decodeTextResult+=upperCaseLetter;

        } else if (letterDecodedPosition >= 97 && letterDecodedPosition <= 122){

          // si la letra es minúscula
          let encodedFormula = (letterDecodedPosition - 97 + chosenOffset ) % 26 + 97; //CODIFICAR
          
          let encodedLetter = String.fromCharCode(encodedFormula);
          decodeTextResult+=encodedLetter;

        } else{
          decodeTextResult+=letter;
        }

            let resultado=document.getElementById('resultado-codificado');
            resultado.value = decodeTextResult;
    }
  }

}

const decodificar = (text, offset) => {
  
  console.log('tecleando en decodificar');
  let chosenOffset = parseInt(offset.value);
  const encodedArray = text.value.trim().split('');
  console.log(encodedArray);

  if (encodedArray.length === 0){
    console.log('Está vacio este array')
    let empty=document.getElementById('resultado-codificado');
    empty.value = '';
  } else {
  
  console.log('si tiene elementos este array');

  // if(chosenOffset < 0){
  //   console.log('entramos')
  //   console.log(chosenOffset);
  //   chosenOffset *=  -1;
  //   console.log(chosenOffset);
  // }

  // TODO SI SE DEBE MODIFICAR
    let decodeTextResult = '';

    for (let letter of encodedArray){

        let letterDecodedPosition = letter.charCodeAt(0);

        // Están consideradas solamente las letras que conforman el abecedario en mayúscula y en minúscula.

        if (letterDecodedPosition >= 65 && letterDecodedPosition <= 90){
          
          // si la letra es mayúscula
          let encodedFormula = (letterDecodedPosition - 65 + chosenOffset ) % 26 + 65;
          let upperCaseLetter = String.fromCharCode(encodedFormula);
          decodeTextResult+=upperCaseLetter;

        } else if (letterDecodedPosition >= 97 && letterDecodedPosition <= 122){

          // si la letra es minúscula
          let encodedFormula = (letterDecodedPosition - 97 + chosenOffset ) % 26 + 97; //CODIFICAR
          
          let encodedLetter = String.fromCharCode(encodedFormula);
          decodeTextResult+=encodedLetter;

        } else{
          decodeTextResult+=letter;
        }

            let resultado=document.getElementById('resultado-codificado');
            resultado.value = decodeTextResult;
    }
  }

}



const cipher = {
  codificar,
  decodificar
};

export default cipher;
