let counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  return (spanEl.textContent = counterValue);
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  return (spanEl.textContent = counterValue);
});

const spanEl = document.querySelector("#value");
