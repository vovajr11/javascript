const refs = {
  switch: document.getElementById("theme-switch-toggle"),
  body: document.querySelector("body"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.switch.addEventListener("change", setClassList);
refs.switch.addEventListener("change", setLocalStorage);

function setClassList() {
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function setLocalStorage() {
  const check = refs.switch.checked;

  if (check) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", Theme.LIGHT);
  }
} 

const themeInLocal = localStorage.getItem("theme");

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
