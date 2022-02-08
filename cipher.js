const cipher = {
  encode: function encode(offset, message) {
    if (typeof offset != 'number' || typeof message != 'string') {
      throw new TypeError();
    }
    console.log('nãopode')
    let asciiCode = 0;
    let finalString = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() == 32) {
        finalString += " ";
      }
      else if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        asciiCode = mod((message[i].charCodeAt() - 65 + offset), 26) + 65;
        finalString += String.fromCharCode(asciiCode);
      }
      else if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
        asciiCode = mod((message[i].charCodeAt() - 97 + offset), 26) + 97;
        finalString += String.fromCharCode(asciiCode);
      }
      else {
        finalString += message[i];
      }

    }
    return finalString;
  },
  decode: function decode(offset, message) {
    if (typeof offset != 'number' || typeof message != 'string') {
      throw new TypeError();
    }

    let asciiCode = 0;
    let finalString = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() == 32) {
        finalString += " ";
      }
      else if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        asciiCode = mod((message[i].charCodeAt() - 65 + (offset * -1)), 26) + 65;
        finalString += String.fromCharCode(asciiCode);
      }
      else if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
        asciiCode = mod((message[i].charCodeAt() - 97 + (offset * -1)), 26) + 97;
        finalString += String.fromCharCode(asciiCode);
      }
      else {
        finalString += message[i];
      }
    }
    return finalString;
  },

};

function mod(n, m) {
  return ((n % m) + m) % m;
}
export default cipher;
