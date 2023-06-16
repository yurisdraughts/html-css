const menuBtn = document.querySelector("#menu-btn");
const menuList = document.querySelector("#menu-list");
let keepMenuOpen = false;

menuBtn.addEventListener("click", () => {
  menuList.classList.add("show-menu-list");
  keepMenuOpen = true;
});

document.addEventListener("click", (e) => {
  if (
    e.target !== menuBtn &&
    e.target !== menuList &&
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
