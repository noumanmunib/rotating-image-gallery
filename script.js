const imageContainer = document.querySelector(".image-container");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

let slideIndex = 0;
let timeOut;
let initialPosition = 0;
let maxPosition = 7;
const slideWidth = document.querySelector(".image-container").offsetWidth;

btnNext.addEventListener("click", () => {
  slideIndex -= 45;
  clearInterval(timeOut);
  updateGallery();
});
btnPrev.addEventListener("click", () => {
  slideIndex += 45;
  clearInterval(timeOut);
  updateGallery();
});

const updateGallery = function () {
  imageContainer.style.transform = `perspective(1000px) rotateY(${slideIndex}deg)`;

  timeOut = setTimeout(() => {
    slideIndex -= 45;
    updateGallery();
  }, 3000);
};

updateGallery();
