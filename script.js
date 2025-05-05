const nav = document.getElementById("menu");
const hero = document.getElementById("hero-header");

window.addEventListener("scroll", () => {
  const heroBottom = hero.getBoundingClientRect().bottom;
  if (heroBottom <= 0) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});
