//projects images automatic slideshow
const projectOne = document.querySelector(".project-img_item--1");
const projectTwo = document.querySelector(".project-img_item--2");
const projectThree = document.querySelector(".project-img_item--3");

function slideShow(project, name, imgQuantity, counter) {
  if (counter < imgQuantity) {
    setTimeout(function () {
      counter++;
      project.src = `./assets/projects/${name}/${counter}.jpg`;
      slideShow(project, name, imgQuantity, counter);
    }, 1800);
  } else {
    project.src = `./assets/projects/${name}/${counter}.jpg`;
    slideShow(project, name, imgQuantity, 0);
  }
}
slideShow(projectOne, "shortly", 7, 1);
slideShow(projectTwo, "footly", 6, 1);
slideShow(projectThree, "seaweed", 4, 1);

//toggle nav button
const toggleBtn = document.querySelector(".side-nav_toggle");
const toggleAside = document.querySelector("aside");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  toggleAside.classList.toggle("active");
});

// toggle active class on nav item on document/main scroll
const navList = document.querySelectorAll(".navigation-item");
const welcomeSection = document.querySelector("#skillsSection");
const aboutSection = document.querySelector("#aboutSection");
const skillsSection = document.querySelector("#skillsSection");
const projectsSection = document.querySelector("#projectsSection");
const contactSection = document.querySelector("#contactSection");
const welcomeNav = document.querySelector(".navWelcome");
const aboutNav = document.querySelector(".navAbout");
const skillsNav = document.querySelector(".navSkills");
const projectsNav = document.querySelector(".navProjects");
const contactNav = document.querySelector(".navContact");

document
  .querySelector("main")
  .addEventListener("scroll", debounce(toggleOnScroll));

function toggleOnScroll() {
  const docHeight = this.scrollTop;
  const aboutStartPoint = aboutSection.offsetTop;
  const skillsStartPoint = skillsSection.offsetTop;
  const projectsStartPoint = projectsSection.offsetTop;
  const contactStartPoint = contactSection.offsetTop;

  if (docHeight < aboutStartPoint - 0.33 * aboutStartPoint) {
    navList.forEach((item) => item.classList.remove("active"));
    welcomeNav.classList.add("active");
  } else if (countHeightPoint(contactStartPoint)) {
    navList.forEach((item) => item.classList.remove("active"));
    contactNav.classList.add("active");
  } else if (countHeightPoint(projectsStartPoint)) {
    navList.forEach((item) => item.classList.remove("active"));
    projectsNav.classList.add("active");
  } else if (countHeightPoint(skillsStartPoint)) {
    navList.forEach((item) => item.classList.remove("active"));
    skillsNav.classList.add("active");
  } else if (countHeightPoint(aboutStartPoint)) {
    navList.forEach((item) => item.classList.remove("active"));
    aboutNav.classList.add("active");
  }

  function countHeightPoint(sectionStartPoint) {
    return docHeight > sectionStartPoint - window.innerHeight / 3;
  }
}

function debounce(func, wait = 15, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
