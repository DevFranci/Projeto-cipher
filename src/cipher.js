const charCodes = {
  A: 65, 
  Z: 90,
  a: 97,
  z: 122, 
  wrapSize: 26, 
};

const encode = (offset, message) => {
  if (typeof offset != "number" || typeof message != "string") {
    throw new TypeError();
  }

  let asciiCode = 0;
  let finalString = "";

  for (let i = 0; i < message.length; i++) {
    asciiCode = message[i].charCodeAt();

    if (asciiCode >= charCodes.a && asciiCode <= charCodes.z) {
      asciiCode = encodeLowerCase(offset, asciiCode);
    } else if (asciiCode >= charCodes.A && asciiCode <= charCodes.Z) {
      asciiCode = encodeUpperCase(offset, asciiCode);
    }

    finalString += String.fromCharCode(asciiCode);
  }

  return finalString;
};

const encodeLowerCase = (offset, asciiCode) => {
  return (asciiCode - charCodes.a + offset) % charCodes.wrapSize + charCodes.a;
};
const encodeUpperCase = (offset, asciiCode) => { 
  return (asciiCode - charCodes.A + offset) % charCodes.wrapSize + charCodes.A;
};
const decode = (offset, message) => {
  if (typeof offset != "number" || typeof message != "string") {
    throw new TypeError();
  }

  let asciiCode = 0;
  let finalString = "";

  for (let i = 0; i < message.length; i++) {
    asciiCode = message[i].charCodeAt();

    if (asciiCode >= charCodes.a && asciiCode <= charCodes.z) {
      asciiCode = decodeLowerCase(offset, asciiCode);
    } else if (asciiCode >= charCodes.A && asciiCode <= charCodes.Z) {
      asciiCode = decodeUpperCase(offset, asciiCode);
    }

    finalString += String.fromCharCode(asciiCode);
  }

  return finalString;
};
const decodeLowerCase = (offset, asciiCode) => {
  return ((asciiCode - charCodes.a - offset) % charCodes.wrapSize + charCodes.wrapSize) % charCodes.wrapSize + charCodes.a;
};

const decodeUpperCase = (offset, asciiCode) => {
  return ((asciiCode - charCodes.A - offset) % charCodes.wrapSize + charCodes.wrapSize) % charCodes.wrapSize + charCodes.A;
};

const cipher = {
  encode: encode,
  decode: decode,
};

export default cipher;
