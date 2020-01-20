let menuIsHovered = false;

function scrollMenu(title) {
  // elmnt.scrollIntoView();
  let elmnt = document.getElementById(title);
  const yOffset = 5;
  const y = elmnt.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}

const target = document.querySelector(".target");
const links = document.querySelectorAll(".nav a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => e.preventDefault());
  links[i].addEventListener("mouseenter", mouseenterFunc);
  links[i].addEventListener('mouseleave', () => {
    menuIsHovered = false
  })
}

function mouseenterFunc() {
  menuIsHovered = true
  if (!this.parentNode.classList.contains("active")) {
    for (let i = 0; i < links.length; i++) {
      if (links[i].parentNode.classList.contains("active")) {}
      links[i].style.opacity = "0.25";
      links[i].parentNode.classList.remove("active");
    }

    this.parentNode.classList.add("active");
    this.style.opacity = "1";

    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.transform = "none";
  }
}

function mouseenterFuncManual(elm) {
  if (!elm.parentNode.classList.contains("active")) {
    for (let i = 0; i < links.length; i++) {
      if (links[i].parentNode.classList.contains("active")) {
        links[i].parentNode.classList.remove("active");
      }
      links[i].style.opacity = "0.25";
    }

    elm.parentNode.classList.add("active");
    elm.style.opacity = "1";

    const width = elm.getBoundingClientRect().width;
    const height = elm.getBoundingClientRect().height;
    const left = elm.getBoundingClientRect().left;

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.transform = "none";
  }
}

// RESIZE
window.addEventListener("resize", resizeFunc);

function resizeFunc() {
  const active = document.querySelector(".nav li.active");

  if (active) {
    const left = active.getBoundingClientRect().left;

    target.style.left = `${left}px`;
  }
}