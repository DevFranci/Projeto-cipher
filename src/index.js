import cipher from "./cipher.js";

window.addEventListener("load", () => {
  const inputOffset = document.getElementById("key");
  const message = document.getElementById("userInput");
  const inputOffsetD = document.getElementById("keyD");
  const messageD = document.getElementById("userInputD");
  const btnEncode = document.getElementById("btnEncode");
  const btnClearEncode = document.getElementById("btnClearEncode");
  const btnDecode = document.getElementById("btnDecode");
  const btnClearDecode = document.getElementById("btnClearDecode");

  btnEncode.addEventListener("click", () => {
    const offset = parseInt(inputOffset.value);

    if (isNaN(offset)) {
      alert("O deslocamento deve ser apenas números");
      return;
    }

    const final = cipher.encode(offset, message.value);
    message.value = final;
    message.select();
    document.execCommand("copy");
  });

  btnClearEncode.addEventListener("click", () => {
    inputOffset.value = "";
    message.value = "";
  });

  btnDecode.addEventListener("click", () => {
    const offset = parseInt(inputOffsetD.value);

    if (isNaN(offset)) {
      alert("O deslocamento deve ser apenas números");
      return;
    }

    const final = cipher.decode(offset, messageD.value);

    messageD.value = final;
    messageD.select();
    document.execCommand("copy");
  });

  btnClearDecode.addEventListener("click", () => {
    inputOffsetD.value = "";
    messageD.value = "";
  });
});
