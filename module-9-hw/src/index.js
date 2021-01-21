import menuElement from "./js/menu.json";
import menuTemplate from "./templetes/templates.hbs";
import "./js/changeTheme.js";
import "./css/style.css";
console.log("hello dsad");

let menu = document.querySelector(".js-menu");
const menuMarkup = createMenuCardsMarkup(menuElement);

menu.insertAdjacentHTML("beforeend", menuMarkup);

function createMenuCardsMarkup(menuElement) {
  return menuTemplate(menuElement);
}
