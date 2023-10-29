let openModal = document.getElementById("open-modal-login");
let modalLogin = document.getElementById("modal-login-container");
let closedModal = document.getElementById("closed-button-modal");
//let closeModal = document.getElementById("")

// open modal

openModal.onclick = function () {
  modalLogin.style.display = "flex";
};

// close modal

closedModal.onclick = function () {
  modalLogin.style.display = "none";
};
