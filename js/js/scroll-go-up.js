const d = document;
export function scrollGoUp(btnClass) {
  let $btn = d.querySelector(btnClass);

  d.addEventListener("scroll", (e) => {
    let scrollValue = d.documentElement.scrollTop;

    if (scrollValue >= 400) {
      $btn.classList.remove("hidden");
    } else {
      $btn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnClass)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
