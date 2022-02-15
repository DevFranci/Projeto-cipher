const charCodes = {
  A: 65, //Código ASCII da letra A maúscula
  Z: 90,
  a: 97,  
  z: 122, // Código ASCII da letra z minuscúla
  wrapSize: 26 //Tamanho do alfabeto
}

const encode = (offset, message) => {
  if(typeof offset != 'number' || typeof message != 'string') {
      throw new TypeError();
  }

  let asciiCode = 0;
  let finalString = "";

  for(let i = 0; i < message.length; i++) {
      asciiCode = message[i].charCodeAt();

      if(asciiCode >= charCodes.a && asciiCode <= charCodes.z) {
          asciiCode = encodeLowerCase(offset, asciiCode);
      } else if(asciiCode >= charCodes.A && asciiCode <= charCodes.Z) {
          asciiCode = encodeUpperCase(offset, asciiCode);
      }

      finalString += String.fromCharCode(asciiCode);
  }


  return finalString;
}

const encodeLowerCase = (offset, asciiCode) => {
  let part1 = (asciiCode - charCodes.a + offset);  // ele traz para o zero para facilitar e soma o deslocamento intervalo[0,25] total da 26. 
  let part2 = part1 % charCodes.wrapSize; // ele usa o mod para tratar os casos em que a soma ultrapasssa o codigo ascii do Z. O mod eh o resto da divisao e vai gerar a letra correta.
  let part3 = part2 + charCodes.a; // somando o valor do codigo inicial para conseguir a letra correta.
  return  part3;
}
const encodeUpperCase = (offset, asciiCode) => {
  let part1 = (asciiCode - charCodes.A + offset);  // ele traz para o zero para facilitar e soma o deslocamento intervalo[0,25] total da 26. 
  let part2 = part1 % charCodes.wrapSize; // ele usa o mod para tratar os casos em que a soma ultrapasssa o codigo ascii do Z. O mod eh o resto da divisao e vai gerar a letra correta.
  let part3 = part2 + charCodes.A; // somando o valor do codigo inicial para conseguir a letra correta.
  return  part3;
}
const decode = (offset, message) => {
  if(typeof offset != 'number' || typeof message != 'string') {
      throw new TypeError();
  }

  let asciiCode = 0;
  let finalString = "";

  for(let i = 0; i < message.length; i++) {
      asciiCode = message[i].charCodeAt();

      if(asciiCode >= charCodes.a && asciiCode <= charCodes.z) {
          asciiCode = decodeLowerCase(offset, asciiCode);
      } else if(asciiCode >= charCodes.A && asciiCode <= charCodes.Z) {
          asciiCode = decodeUpperCase(offset, asciiCode);
      }

      finalString += String.fromCharCode(asciiCode);
  }

  return finalString;
}
const decodeLowerCase = (offset, asciiCode) => {
  let part1 = (asciiCode - charCodes.a - offset); // Ele subtrai o código inicial para trazer entre o e 25, e depois subtrai o deslocamento para achar e mensagem decodificada
  let part2 = part1 % charCodes.wrapSize; // 
  let part3 = part2 + charCodes.wrapSize; // 
  let part4 = part3 % charCodes.wrapSize; // 
  let part5 = part4 + charCodes.a; // voltando para o codigo ASCII
  return part5;
}

const decodeUpperCase = (offset, asciiCode) => {
  let part1 = (asciiCode - charCodes.A - offset); // normalizar entre 0 e 25
  let part2 = part1 % charCodes.wrapSize; // 
  let part3 = part2 + charCodes.wrapSize; // 
  let part4 = part3 % charCodes.wrapSize; // caso de letras normais
  let part5 = part4 + charCodes.A; // voltando para o codigo ASCII
  return part5;
}

const cipher = {
  encode: encode, 
  decode: decode, 
};


export default cipher;
