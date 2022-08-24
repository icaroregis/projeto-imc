import { modal as Modal } from "./modal.js";
import { alertError } from "./alert-error.js";
import notANumber from "./notANumber.js";
import IMC from "./imc.js";

const form = document.querySelector("form");
export const inputWeight = document.querySelector("#weight");
export const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertErros = notANumber(weight) || notANumber(height);

  if (showAlertErros) {
    alertError.open();

    setTimeout(() => {
      alertError.close()
    }, 2000);
    return;
  }

  alertError.close();

  const result = IMC(weight, height);
  displayResultMessage(result);
}

function displayResultMessage(result) {
  const message = `Seu IMC é de : ${result}`

  Modal.modalMessage.innerText = message;
  Modal.open();

  inputHeight.value = "";
  inputWeight.value = "";
}

/* outra maniera de fechar a box de error 
através do evento oninput que captura qualquer alteração no input.

desta forma poderíamos fazer :

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close(); 
*/






