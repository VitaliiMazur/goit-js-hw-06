const nameCategories = document.querySelector("#categories");
const nameCategoriesItem = nameCategories.children;
console.log(`Number of categories: ${nameCategoriesItem.length}`);
for (let i = 0; i < nameCategoriesItem.length; i += 1) {
  console.log("Category:", nameCategoriesItem[i].firstElementChild.textContent);
  console.log(
    "Elements:",
    nameCategoriesItem[i].lastElementChild.children.length
  );
}
