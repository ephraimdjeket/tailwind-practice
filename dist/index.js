const burgerMenu = document.getElementById("burger");
const Menu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  if (Menu.style.display === "none") {
    Menu.style.display = "block";
  } else {
    Menu.style.display = "none";
  }
});
