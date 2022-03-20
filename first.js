const hamburgerContainer = document.querySelector("#heade_main-nav");
const hamburger = document.querySelector(".header_main-nav-hamburger");
const links = document.querySelectorAll(".header_main-nav-link li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
