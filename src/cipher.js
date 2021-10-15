const codificar = (text, offset) => {
  
  console.log('tecleando');

  let chosenOffset = parseInt(offset.value);
  const encodedArray = text.value.split('');
  
  // if(chosenOffset < 0){
  //   console.log('entramos')
  //   console.log(chosenOffset);
  //   chosenOffset *=  -1;
  //   console.log(chosenOffset);
  // }

  let decodeTextResult = '';

  for (let letter of encodedArray){

      let letterDecodedPosition = letter.charCodeAt(0);

      // if letra es espacio o símbolo {usa regex y lo metes en decodeTextResult}

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
  //     let ventanaCodificar = document.getElementById('resultado-codificado');
  //     ventanaCodificar.value = decodeTextResult;

          let resultado=document.getElementById('resultado-codificado');
          resultado.disabled = true;
          // console.log(resultado.value);

          resultado.value = decodeTextResult;
  }
}

const decodificar = (text) => {
    
  const encodedArray = text.value.split('');
  console.log(encodedArray);
  
  let decodedTextResult = '';

  for (let letter of encodedArray){

      console.log(letter);
      
      let letterDecodedPosition = letter.charCodeAt(0);
      console.log(letterDecodedPosition);
      
      let encodedFormula = (letterDecodedPosition - 65 - 33) % 26 + 65;
      console.log('encoded Formula: ' + encodedFormula);

      let encodedLetter = String.fromCharCode(encodedFormula);
      console.log(encodedLetter);
      
      decodedTextResult+=encodedLetter;

  }    

  console.log(decodedTextResult);

  let decodedWindow = document.getElementById('decoded');
  decodedWindow.innerHTML = decodedTextResult; 
}



const cipher = {
  codificar,
  decodificar
};

export default cipher;
