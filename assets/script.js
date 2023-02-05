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

// Constante Arrow
const leftArrow = document.querySelector("#prev");
const rightArrow = document.querySelector("#next");

leftArrow.addEventListener("click", () => {
  //Console log pour voir si la flêches fonctionne
  console.log("Arrow Left fonctionne");
});

rightArrow.addEventListener("click", () => {
  //Console log pour voir si la flêches fonctionne
  console.log("Arrow Right fonctionne");
});
