const d = document;
let $hamburger_button = d.getElementById("hamburger-button"),
  $aside = d.querySelector(".aside-panel");

let activeClass = "is-active";

const clickListener = () => {
  $hamburger_button.classList.toggle(activeClass);
  $aside.classList.toggle(activeClass);
};

const listenerDisableHamburger = () => {
  $hamburger_button.classList.remove(activeClass);
  $aside.classList.remove(activeClass);
};

$hamburger_button.addEventListener("click", clickListener);

document.addEventListener("click", function (e) {
  if (e.target && e.target.matches(".menu-nav a")) {
    listenerDisableHamburger();
  }
});
