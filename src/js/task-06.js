const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", inputFocus);
function inputFocus(blur) {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  } else inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
}
