const navMenu = document.getElementById("navMenu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

const toggleMenu = () => {
  navMenu.classList.toggle("nav-menu--open");
};

openButton.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});
closeButton.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});
document.body.addEventListener("click", () => {
  if (navMenu.classList.contains("nav-menu--open")) {
    navMenu.classList.remove("nav-menu--open");
  }
});
