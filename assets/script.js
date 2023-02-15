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
// Variable slides actual
let actualSlide = 0;
// Constante qui sélectionne class arrow left et right
const leftArrow = document.querySelector("#prev");
const rightArrow = document.querySelector("#next");

// Ajout des event Listeners sur les flêches avec un evenement Click et
// une function anonyme flêcher "Lamdba"
leftArrow.addEventListener("click", () => {
  //Console log pour voir si la flêches répond au click
  console.log("Arrow Left fonctionne");
  prevArrow();
  updateDots();
  updateImages();
  updateTexte();
});

rightArrow.addEventListener("click", () => {
  //Console log pour voir si la flêches répond au click
  console.log("Arrow Right fonctionne");
  nextArrow();
  updateDots();
  updateImages();
  updateTexte();
});

// Création function prevArrow (correspond a left arrow)
function prevArrow() {
  // Si avec la condition actualSlides est supérieur a 0
  if (actualSlide > 0) {
    // Décrémentation de 1
    actualSlide = actualSlide - 1;
  } else {
    // Sinon décrémentation de - 1 sur le tableau slides
    actualSlide = slides.length - 1;
  }
  console.log("prev");
}

// Création function nextArrow (correspond a right arrow)
function nextArrow() {
  // Si la condition actualSlides est inférieur à la longueur du tableau slides - 1 = true
  if (actualSlide < slides.length - 1) {
    // Alors actualSlides + 1
    actualSlide = actualSlide + 1;
  } else {
    // Sinon actualSlides = 0 il retourne a l'index 0 du tableau
    actualSlide = 0;
  }
  console.log("next");
}

// Création function updateDots
function updateDots() {
  // Création d'une constante dots avec cette fois querySelectorAll pour toute les class dot
  // querySelectorAll récupere tous les éléments HTML (tableau)
  const dots = document.querySelectorAll(".dot");
  // 1er valeur let i = 0 correspond au compteur pour le nombre de la boucle
  // 2eme condition)  i est inférieur à dots.length
  // 3eme condition) i + 1
  for (let i = 0; i < dots.length; i++) {
    // Si i est strictement égalité à actualSlides
    if (i === actualSlide) {
      // dots[i] = syntaxe pour accéder à l'élément du tableau dots
      // classlist.add ajoute une class dot_selected
      dots[i].classList.add("dot_selected");
    } else {
      // classlist.remove supprime la class dot_selected
      dots[i].classList.remove("dot_selected");
    }
  }
}

// Création function Images
function updateImages() {
  const pictures = document.querySelector(".banner-img");
  const actualPictures = slides[actualSlide];
  pictures.src = "./assets/images/slideshow/" + actualPictures.image;
  pictures.alt = actualPictures.tagLine;
}

// Création function Textes
function updateTexte() {
  const textes = document.querySelector("#banner-txt");
  const actualTexte = slides[actualSlide];
  textes.innerHTML = actualTexte.tagLine;
}
