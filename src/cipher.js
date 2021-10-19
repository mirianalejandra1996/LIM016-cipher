function codificar (text, offset) {
  
  console.log('tecleando en codificar');
  console.log(offset.value);
  let chosenOffset = parseInt(offset.value);
  const encodedArray = text.value.trim().split('');
  console.log(encodedArray);

  if (encodedArray.length === 0){
    console.log('Está vacio este array')
    return '';
  } else {
  
  console.log('si tiene elementos este array');

    let encodedTextResult = '';
    // ! NO TOCAR
    for (let letter of encodedArray){

        let letterDecodedPosition = letter.charCodeAt(0);

        // Están consideradas solamente las letras que conforman el abecedario en mayúscula y en minúscula.

        if (letterDecodedPosition >= 65 && letterDecodedPosition <= 90){
          
          // si la letra es mayúscula
          let encodedFormula = (letterDecodedPosition - 65 + chosenOffset ) % 26 + 65;
          let upperCaseLetter = String.fromCharCode(encodedFormula);
          encodedTextResult+=upperCaseLetter;

        } else if (letterDecodedPosition >= 97 && letterDecodedPosition <= 122){

          // si la letra es minúscula
          let encodedFormula = (letterDecodedPosition - 97 + chosenOffset ) % 26 + 97; //CODIFICAR
          
          let encodedLetter = String.fromCharCode(encodedFormula);
          encodedTextResult+=encodedLetter;

        } else{
          encodedTextResult+=letter;
        }

      }
      
    return encodedTextResult;
  }

}

function decodificar (text, offset) {
  
  console.log('tecleando en decodificar');
  
  console.log(offset.value);
  let chosenOffset = parseInt(offset.value);
  const encodedArray = text.value.trim().split('');
  console.log(encodedArray);

  if (encodedArray.length === 0){
    console.log('Está vacio este array')
    return '';
  } else {
  
  console.log('si tiene elementos este array');

  let encodedTextResult = '';
  // ! NO TOCAR
  for (let letter of encodedArray){

      let letterDecodedPosition = letter.charCodeAt(0);

      console.log(`la letra ${letter} está en la posición ${letterDecodedPosition}`);

      // Están consideradas solamente las letras que conforman el abecedario en mayúscula y en minúscula.

      if (letterDecodedPosition >= 65 && letterDecodedPosition <= 90){
        
        // si la letra es mayúscula

        let decodedFormula = (letterDecodedPosition - 65 + (26 - chosenOffset )) % 26 + 65;
        let upperCaseLetter = String.fromCharCode(decodedFormula);

        console.log(`La letra ${upperCaseLetter} está en la posición ${upperCaseLetter.charCodeAt(0)}`);
        encodedTextResult+=upperCaseLetter;
        

      } else if (letterDecodedPosition >= 97 && letterDecodedPosition <= 122){

        // si la letra es minúscula
        let decodedFormula = (letterDecodedPosition - 97 + (26 - chosenOffset ) ) % 26 + 97; //CODIFICAR
        
        let encodedLetter = String.fromCharCode(decodedFormula);
        encodedTextResult+=encodedLetter;

      } else{
        encodedTextResult+=letter;
      }

      // console.log(`la letra ${letter} está en la posición ${letterDecodedPosition} y se traduce a ${encodedLetter} en la posición ${encodedLetter.charCodeAt(0)}`);
  
  }
  return encodedTextResult;
  }
}


const cipher = {
  codificar,
  decodificar
};

export default cipher;
