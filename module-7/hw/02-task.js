// В HTML есть пустой список ul#ingredients.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs = {
  listIngredients: document.querySelector('#ingredients'),
};

const addIngredients = ingredients.forEach(ingredient => {
  let addItemIngredient = document.createElement('li');

  addItemIngredient.innerHTML = ingredient;
  refs.listIngredients.append(addItemIngredient);

  // addItemIngredient.textContent = ingredient;

  // refs.listIngredients.append(addItemIngredient);

  // console.log(addItemIngredient);
});

console.log(refs.listIngredients);
