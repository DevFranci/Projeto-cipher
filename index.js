import cipher from './cipher.js';
console.log(cipher)

window.getText = function getText() {

  var inputDeslocamento = document.getElementById("key");
  var stringDeslocamento = inputDeslocamento.value;
  const deslocamento = parseInt(stringDeslocamento)
  if (isNaN(deslocamento)) {
    alert("O deslocamento deve ser apenas números");
    return;
  }
  let message = document.getElementById("userInput");
  const final = cipher.encode(deslocamento, message.value);
  message.value = final;
  message.select();
  message = document.execCommand("copy");
};

window.getText2 = function getText2() {
  const offset = parseInt(document.getElementById("keyD").value);
  if (isNaN(offset)) {
    alert("O deslocamento deve ser apenas números");
    return;
  }
  let message = document.getElementById("userInputD");
  const final = cipher.decode(offset, message.value);

  message.value = final;
  message.select();
  message = document.execCommand("copy");
};

window.limparElementoCodificar = function limparElementoCodificar() {
  var key = document.getElementById("key")
  var userInput = document.getElementById("userInput")
  key.value = ""
  userInput.value = ""

};

window.limparElementoDecodificar = function limparElementoDecodificar() {
  var keyD = document.getElementById("keyD")
  var userInputD = document.getElementById("userInputD")
  keyD.value = ""
  userInputD.value = ""
};
















