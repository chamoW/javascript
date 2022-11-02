const d = document,
  n = navigator,
  w = window;

export default function scrollSpy(dataScrollSelector = "data-scroll-spy") {
  const $sections = d.querySelectorAll(`section[${dataScrollSelector}]`);

  let options = {
    //rootMargin: "-300px"
    //threshold: 0.4,
    threshold: [0.5, 0.75],
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;

      if (entry.isIntersecting) {
        console.log("id ", id);
        console.log(entry);

        d.querySelector(
          `a[${dataScrollSelector}][href="#${id}"]`
        ).classList.add("active");
      } else {
        d.querySelector(
          `a[${dataScrollSelector}][href="#${id}"]`
        ).classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  $sections.forEach((element) => observer.observe(element));
}
