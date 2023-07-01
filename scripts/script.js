const menuBtn = document.querySelector("#menu-btn");
const menuList = document.querySelector("#menu-list");
let keepMenuOpen = false; // if menu is opened by a click

menuBtn.addEventListener("click", () => {
  if (keepMenuOpen && menuList.classList.contains("show-menu-list")) {
    menuList.classList.remove("show-menu-list");
    keepMenuOpen = false;
  } else {
    menuList.classList.add("show-menu-list");
    keepMenuOpen = true;
  }
});

document.addEventListener("click", (event) => {
  if (
    event.target !== menuBtn &&
    event.target !== menuList &&
    menuList.classList.contains("show-menu-list")
  ) {
    menuList.classList.remove("show-menu-list");
    keepMenuOpen = false;
  }
});

menuBtn.addEventListener("mouseenter", () => {
  menuList.classList.add("show-menu-list");
});

menuBtn.addEventListener("mouseleave", () => {
  if (!keepMenuOpen) {
    menuList.classList.remove("show-menu-list");
  }
});
