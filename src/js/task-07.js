const inputEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEL.addEventListener("input", inputELementSize);
function inputELementSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
