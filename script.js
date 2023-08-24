const menuIcon = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu-list");
const cancelIcon = document.querySelector(".cancel-btn");

menuIcon.onclick = () => {
  menuList.classList.add("active");
  menuIcon.classList.add("hide");
};
cancelIcon.onclick = () => {
  menuList.classList.remove("active");
  menuIcon.classList.remove("hide");
};
