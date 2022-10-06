const d = document;

let activeClass = "is-active";

const activeButtonAndMenu = ($hamburger_button, $aside) => {
  $hamburger_button.classList.toggle(activeClass);
  $aside.classList.toggle(activeClass);
};

const listenerDisableHamburger = ($hamburger_button, $aside) => {
  $hamburger_button.classList.remove(activeClass);
  $aside.classList.remove(activeClass);
};

export function menuHamburger(idHamburgerButton, classAsidePanel, classItemA) {
  let $hamburger_button = d.querySelector(idHamburgerButton),
    $aside = d.querySelector(classAsidePanel);

  d.addEventListener("click", function (e) {
    const { target } = e;

    if (target) {
      if (target.matches(classItemA)) {
        listenerDisableHamburger($hamburger_button, $aside);
      } else if (
        target.matches(idHamburgerButton) ||
        target.matches(`${idHamburgerButton} *`)
      ) {
        activeButtonAndMenu($hamburger_button, $aside);
      }
    }
  });
}
