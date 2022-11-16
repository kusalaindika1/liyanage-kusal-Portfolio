const menu = document.getElementById("menu");

document.getElementById("menuButton").addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("show");
});

document.getElementById("menuCloseButton").addEventListener("click", () => {
  menu.classList.remove("show");
  menu.classList.add("hidden");
});
