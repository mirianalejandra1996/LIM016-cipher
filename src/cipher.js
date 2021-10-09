const codificar = (text) => {
  const encodedArray = text.value.split('');
  // console.log(encodedArray);
  
  let decodeTextResult = '';

  for (let letter of encodedArray){

      console.log(letter);
      
      let letterDecodedPosition = letter.charCodeAt(0);
      
      // console.log(letterDecodedPosition);
      
      let encodedFormula = (letterDecodedPosition - 65 + 33) % 26 + 65;
      // console.log(encodedFormula);

      let encodedLetter = String.fromCharCode(encodedFormula);
      // console.log(encodedLetter);
      
      decodeTextResult+=encodedLetter;

  }    

  // console.log(decodeTextResult);

  let encodeWindow = document.getElementById('encoded');
  encodeWindow.innerHTML = decodeTextResult; 
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
      console.log(encodedFormula);

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


