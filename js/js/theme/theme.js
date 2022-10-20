const d = document,
  ls = localStorage,
  lsKey = "wl-theme",
  lsKeyValue = ls.getItem(lsKey);

export function changeTheme(btnThemeClass, classDarkMode, dataDarkSelector) {
  let $btnThemeClass = d.querySelector(btnThemeClass),
    $dataDarkSelectors = d.querySelectorAll(`[${dataDarkSelector}]`);

  let moon = "🌙",
    sun = "☀️";

  function setDarkTheme() {
    $dataDarkSelectors.forEach((item) => item.classList.add(classDarkMode));
    $btnThemeClass.textContent = sun;
    ls.setItem(lsKey, "dark");
  }

  function setLighTheme() {
    $dataDarkSelectors.forEach((item) => item.classList.remove(classDarkMode));
    $btnThemeClass.textContent = moon;
    ls.setItem(lsKey, "light");
  }

  if (lsKeyValue === null) {
    ls.setItem(lsKey, "light");
  } else if (lsKeyValue === "light") {
    setLighTheme();
  } else if (lsKeyValue === "dark") {
    setDarkTheme();
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnThemeClass)) {

      if ($btnThemeClass.textContent === moon) {
        setDarkTheme();
      } else if ($btnThemeClass.textContent === sun) {
        setLighTheme();
      }
    }
  });
}
