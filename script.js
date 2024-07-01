const listIcon = document.querySelector(".list-icon");
const navList = document.querySelector("header .container ul");
const bars = document.querySelectorAll("header .list-icon span");
const nav = document.querySelector("header");
const mainSection = document.querySelector("main");
const logo = document.querySelector("header .logo img");
let opened = false;

// Implementing  nav list

const openList = function () {
  navList.classList.remove("close");
  navList.classList.add("open");
  bars[1].style.width = "50%";
};

const closeList = function () {
  navList.classList.remove("open");
  navList.classList.add("close");
  bars[1].style.width = "100%";
};

listIcon.addEventListener("click", function () {
  opened = !opened;
  opened ? openList() : closeList();
});

navList.addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
    closeList();
    opened = false;
  }
});

///////////////////////////////////////////////////////////////////////////

// Implementing sicky nav

const obsCallback = function (entries, observer) {
  const [entry] = entries;

  //   console.log(entry);

  if (entry.isIntersecting) {
    navList.style.color = "white";
    nav.style.backgroundColor = "transparent";
    bars.forEach((bar) => (bar.style.backgroundColor = "white"));
    logo.src = logo.dataset.firstLogo;
  } else {
    navList.style.color = "black";
    nav.style.backgroundColor = "white";
    bars.forEach((bar) => (bar.style.backgroundColor = "black"));
    logo.src = logo.dataset.secondLogo;
  }
};

const mainSectionObs = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0.95,
});

mainSectionObs.observe(mainSection);
