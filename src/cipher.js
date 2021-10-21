function encode (offset,text) {

  let chosenOffset = Number(offset % 26 + 26 ) % 26;
  const decodedArray = text.split('');
  
  try {
    if(chosenOffset == "")  throw new Error("Por favor ingrese un valor para el desplazamiento");
    if(isNaN(chosenOffset)) throw new Error ("El valor ingresado no es de tipo numérico");
    chosenOffset = Number(chosenOffset);
    if(chosenOffset === 0) throw new Error("El valor no puede ser cero")
    if(chosenOffset > 33)   throw new Error("El valor es muy alto");
    if(chosenOffset === null )   throw new Error("El valor es muy alto");
    if(decodedArray.length === 0) throw new Error ("El mensaje ingresado está vacio");
  }
  catch(err) {
    return err;
  }


    let encodedTextResult = '';
    // ! NO TOCAR
    for (let letter of decodedArray){

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


function decode (offset, text) {
  
  let chosenOffset = Number(offset % 26 - 26 ) % 26;
  const encodedArray = text.split('');

  try {
    if(chosenOffset == "")  throw new Error("Por favor ingrese un valor en el offset");
    if(isNaN(chosenOffset)) throw new Error ("El valor ingresado no es de tipo numérico");
    chosenOffset = Number(chosenOffset);
    if(chosenOffset === 0) throw new Error("El valor no puede ser cero")
    if(chosenOffset > 33)   throw new Error("El valor es muy alto");
    if(chosenOffset === null )   throw new Error("El valor es muy alto");
    if(encodedArray.length === 0) throw new Error ("El mensaje ingresado está vacio");
  }
  catch(err) {
    console.log(err);
  }

  let decodedTextResult = '';

  for (let letter of encodedArray){

      let letterEncodedPosition = letter.charCodeAt(0);

      // Están consideradas solamente las letras que conforman el abecedario en mayúscula y en minúscula.

      if (letterEncodedPosition >= 65 && letterEncodedPosition <= 90){
        
        // si la letra es mayúscula

        let decodedFormula = (letterEncodedPosition - 65 + (26 - chosenOffset )) % 26 + 65;
        let upperCaseLetter = String.fromCharCode(decodedFormula);

        decodedTextResult+=upperCaseLetter;
        

      } else if (letterEncodedPosition >= 97 && letterEncodedPosition <= 122){

        // si la letra es minúscula
        let decodedFormula = (letterEncodedPosition - 97 + (26 - chosenOffset ) ) % 26 + 97;
        
        let decodedLetter = String.fromCharCode(decodedFormula);
        decodedTextResult+=decodedLetter;

      } else{
        decodedTextResult+=letter;
      }

  }
  return decodedTextResult;
}


const cipher = {
  encode,
  decode
};

export default cipher;
