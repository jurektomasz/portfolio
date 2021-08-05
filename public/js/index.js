// toggle active class on clicked nav item
const navList = document.querySelectorAll(".navigation-item");
for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", () => {
    let j = 0;
    while (j < navList.length) {
      navList[j++].className = "navigation-item";
    }
    navList[i].className = "navigation-item active";
  });
}

//toggle nav button
const toggleBtn = document.querySelector(".side-nav_toggle");
const toggleAside = document.querySelector("aside");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  toggleAside.classList.toggle("active");
});
