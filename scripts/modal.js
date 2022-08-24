export const modal = {
  modalWrapper: document.querySelector(".modal-wrapper"),
  modalMessage: document.querySelector("#message"),
  modalBtmClose: document.querySelector(".modal .close"),
  open() {
    this.modalWrapper.classList.add("open");
  },
  close() {
    this.modalWrapper.classList.remove("open");
  }
}

modal.modalBtmClose.onclick = () => {
  modal.close();
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.close();
  }
})