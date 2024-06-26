const menu = document.querySelector("#menu");
const menuList = document.querySelector("#menulist");



//preloader
gsap.fromTo(
  "#preloader",
  { autoAlpha: 1 },
  { visibility: "hidden", duration: 1.5, delay: 3.5 }
);

gsap.fromTo("#main", { visibility: "hidden" }, { autoAlpha: 1, delay: 3.8 });


function display() {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
  } else {
    menuList.classList.add("hidden");
  }
}
function hideMenu(){
  menuList.classList.add("hidden");
}
// menu
menu.addEventListener("click", display); 
