//select get elements
const menuIcon = document.getElementById("menuIcon");
const crossIcon = document.getElementById("crossIcon");
const navItems = document.getElementById("navItems");

function toggleMenu() {
  navItems.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
}

menuIcon.addEventListener("click", toggleMenu);
crossIcon.addEventListener("click", toggleMenu);
