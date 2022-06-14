function handleClickOutsideJS(event) {
  let overlayjs = document.getElementById("overlay-js");
  let modaljs = document.getElementById("modal-js");
  if (!modaljs.contains(event.target)) {
    modaljs.style.display = "none";
    overlayjs.style.display = "none";
    document.removeEventListener("click", handleClickOutsideJS, false);
  }
}

function openModalJS() {
  let overlay = document.getElementById("overlay-js");
  let modal = document.getElementById("modal-js");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideJS, false);
  }, 200);
}

function handleClickOutsideRubi(event) {
  let overlayRubi = document.getElementById("overlay-rubi");
  let modalRubi = document.getElementById("modal-rubi");
  if (!modalRubi.contains(event.target)) {
    modalRubi.style.display = "none";
    overlayRubi.style.display = "none";
    document.removeEventListener("click", handleClickOutsideRubi, false);
  }
}

function openModalRubi() {
  let overlay = document.getElementById("overlay-rubi");
  let modal = document.getElementById("modal-rubi");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideRubi, false);
  }, 200);
}

function handleClickOutsideCSharp(event) {
  let overlayCSharp = document.getElementById("overlay-c-sharp");
  let modalCSharp = document.getElementById("modal-c-sharp");
  if (!modalCSharp.contains(event.target)) {
    modalCSharp.style.display = "none";
    overlayCSharp.style.display = "none";
    document.removeEventListener("click", handleClickOutsideCSharp, false);
  }
}

function openModalCSharp() {
  let overlay = document.getElementById("overlay-c-sharp");
  let modal = document.getElementById("modal-c-sharp");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideCSharp, false);
  }, 200);
}

function handleClickOutsideGo(event) {
  let overlayGo = document.getElementById("overlay-go");
  let modalGo = document.getElementById("modal-go");
  if (!modalGo.contains(event.target)) {
    modalGo.style.display = "none";
    overlayGo.style.display = "none";
    document.removeEventListener("click", handleClickOutsideGo, false);
  }
}

function openModalGo() {
  let overlay = document.getElementById("overlay-go");
  let modal = document.getElementById("modal-go");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideGo, false);
  }, 200);
}

function handleClickOutsidePython(event) {
  let overlayPython = document.getElementById("overlay-python");
  let modalPython = document.getElementById("modal-python");
  if (!modalPython.contains(event.target)) {
    modalPython.style.display = "none";
    overlayPython.style.display = "none";
    document.removeEventListener("click", handleClickOutsidePython, false);
  }
}

function openModalPython() {
  let overlay = document.getElementById("overlay-python");
  let modal = document.getElementById("modal-python");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsidePython, false);
  }, 200);
}

function handleClickOutsideKotlin(event) {
  let overlayKotlin = document.getElementById("overlay-kotlin");
  let modalKotlin = document.getElementById("modal-kotlin");
  if (!modalKotlin.contains(event.target)) {
    modalKotlin.style.display = "none";
    overlayKotlin.style.display = "none";
    document.removeEventListener("click", handleClickOutsideKotlin, false);
  }
}

function openModalKotlin() {
  let overlay = document.getElementById("overlay-kotlin");
  let modal = document.getElementById("modal-kotlin");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideKotlin, false);
  }, 200);
}

function handleClickOutsideCPlus(event) {
  let overlayCPlus = document.getElementById("overlay-c-plus");
  let modalCPlus = document.getElementById("modal-c-plus");
  if (!modalCPlus.contains(event.target)) {
    modalCPlus.style.display = "none";
    overlayCPlus.style.display = "none";
    document.removeEventListener("click", handleClickOutsideCPlus, false);
  }
}

function openModalCPlus() {
  let overlay = document.getElementById("overlay-c-plus");
  let modal = document.getElementById("modal-c-plus");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideCPlus, false);
  }, 200);
}

function handleClickOutsideC(event) {
  let overlayC = document.getElementById("overlay-c");
  let modalC = document.getElementById("modal-c");
  if (!modalC.contains(event.target)) {
    modalC.style.display = "none";
    overlayC.style.display = "none";
    document.removeEventListener("click", handleClickOutsideC, false);
  }
}

function openModalC() {
  let overlay = document.getElementById("overlay-c");
  let modal = document.getElementById("modal-c");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideC, false);
  }, 200);
}

function handleClickOutsideJava(event) {
  let overlayJava = document.getElementById("overlay-java");
  let modalJava = document.getElementById("modal-java");
  if (!modalJava.contains(event.target)) {
    modalJava.style.display = "none";
    overlayJava.style.display = "none";
    document.removeEventListener("click", handleClickOutsideJava, false);
  }
}

function openModalJava() {
  let overlay = document.getElementById("overlay-java");
  let modal = document.getElementById("modal-java");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideJava, false);
  }, 200);
}

function handleClickOutsidePhp(event) {
  let overlayPhp = document.getElementById("overlay-php");
  let modalPhp = document.getElementById("modal-php");
  if (!modalPhp.contains(event.target)) {
    modalPhp.style.display = "none";
    overlayPhp.style.display = "none";
    document.removeEventListener("click", handleClickOutsidePhp, false);
  }
}

function openModalPhp() {
  let overlay = document.getElementById("overlay-php");
  let modal = document.getElementById("modal-php");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsidePhp, false);
  }, 200);
}
