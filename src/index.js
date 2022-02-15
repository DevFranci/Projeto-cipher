import cipher from "./cipher.js";

document.getText = () => {
  let inputOffset = document.getElementById("key");
  let stringOffset = inputOffset.value;
  const offset = parseInt(stringOffset);

  if (isNaN(offset)) {
    alert("O deslocamento deve ser apenas números");
    return;
  }

  let message = document.getElementById("userInput");
  const final = cipher.encode(offset, message.value);
  message.value = final;
  message.select();
  message = document.execCommand("copy");
};

document.getText2 = () => {
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

document.clearEncode = () => {
  var key = document.getElementById("key");
  var userInput = document.getElementById("userInput");
  key.value = "";
  userInput.value = "";
};

document.clearDecode = () => {
  var keyD = document.getElementById("keyD");
  var userInputD = document.getElementById("userInputD");
  keyD.value = "";
  userInputD.value = "";
};
