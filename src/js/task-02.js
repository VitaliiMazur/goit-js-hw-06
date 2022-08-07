const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngredients = ingredients.map((ingredient) => {
  const ingItem = document.createElement("li");
  console.log(ingItem);
  ingItem.textContent = ingredient;
  ingItem.classList.add("item");
  return ingItem;
});

const ingEl = document.querySelector("#ingredients");

ingEl.append(...arrayIngredients);
