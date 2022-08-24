import { modal as Modal } from "./modal.js";
import IMC from "./imc.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de : ${result}`

  Modal.modalMessage.innerText = message;
  Modal.open();
}






