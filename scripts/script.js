const navMenu = document.getElementById("navMenu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

const toggleMenu = () => {
  navMenu.classList.toggle("nav-menu--open");
};

openButton.addEventListener("click", () => {
  toggleMenu;
});

closeButton.addEventListener("click", () => {
  toggleMenu;
});
