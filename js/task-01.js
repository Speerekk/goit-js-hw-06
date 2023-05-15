const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}\n`);

Array.from(categoryItems).forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}\n`);
});
