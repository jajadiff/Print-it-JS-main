const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let actualSlide = 0;
// Constante Arrow
const leftArrow = document.querySelector("#prev");
const rightArrow = document.querySelector("#next");

leftArrow.addEventListener("click", () => {
  //Console log pour voir si la flêches répond au click
  console.log("Arrow Left fonctionne");
  prevArrow();
  updateDots();
});

rightArrow.addEventListener("click", () => {
  //Console log pour voir si la flêches répond au click
  console.log("Arrow Right fonctionne");
  nextArrow();
  updateDots();
});

function prevArrow() {
  if (actualSlide > 0) {
    actualSlide = actualSlide - 1;
  } else {
    actualSlide = slides.length - 1;
  }
  console.log("prev");
}

function nextArrow() {
  if (actualSlide < slides.length - 1) {
    actualSlide = actualSlide + 1;
  } else {
    actualSlide = 0;
  }
  console.log("next");
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) {
    if (i === actualSlide) {
      dots[i].classList.add("dot_selected");
    } else {
      dots[i].classList.remove("dot_selected");
    }
  }
}
