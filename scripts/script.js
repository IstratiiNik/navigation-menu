const navMenu = document.getElementById("navMenu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const menuItems = document.querySelectorAll(".nav-menu__item");

// Toggles the visibility of the navigation menu
const toggleMenu = () => {
  navMenu.classList.toggle("nav-menu--open");
};

// Handles submenu visibility toggle
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents menu from closing
    const submenu = item.nextElementSibling; // Finds the next sibling (submenu)
    if (submenu && submenu.classList.contains("submenu")) {
      submenu.classList.toggle("visible"); // Toggles submenu visibility
    }
  });
});

// Opens the navigation menu
openButton.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Closes the navigation menu
closeButton.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Closes the menu when clicking outside of it
document.body.addEventListener("click", (e) => {
  if (
    !navMenu.contains(e.target) &&
    navMenu.classList.contains("nav-menu--open")
  ) {
    navMenu.classList.remove("nav-menu--open");
  }
});
