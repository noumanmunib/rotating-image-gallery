const imageContainer = document.querySelector(".image-container");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const galleryImages = document.querySelectorAll(".gallery-img");
const totalImages = galleryImages.length;

let slideIndex = 0;
let timeOut;
const slideWidth = document.querySelector(".image-container").offsetWidth;

btnNext.addEventListener("click", () => {
  slideIndex -= 45;
  clearInterval(timeOut);
  updateGallery();

  //  adding button pressed affect
  btnNext.classList.add("btn-pressed");
  setTimeout(() => {
    btnNext.classList.remove("btn-pressed");
  }, 300);

  if (slideIndex === totalImages) {
    btnNext.disabled = true;
  }
});

btnPrev.addEventListener("click", () => {
  slideIndex += 45;
  clearInterval(timeOut);
  updateGallery();

  //  adding button pressed affect
  btnPrev.classList.add("btn-pressed");
  setTimeout(() => {
    btnPrev.classList.remove("btn-pressed");
  }, 300);

  if (slideIndex < 0) {
    btnNext.disabled = false;
  }
});

const updateGallery = function () {
  imageContainer.style.transform = `perspective(1000px) rotateY(${slideIndex}deg)`;

  //   timeOut = setTimeout(() => {
  //     slideIndex -= 45;
  //     updateGallery();
  //   }, 4000);

  //   disabling buttons on first and last slides on the gallery
  if (slideIndex === (totalImages - 1) * -45) {
    btnNext.disabled = true;
    btnNext.style.opacity = 0;
    btnNext.style.cursor = "default";
  } else {
    btnNext.style.opacity = 0.5;
    btnNext.style.cursor = "pointer";
  }

  if (slideIndex === 0) {
    btnPrev.disabled = true;
    btnPrev.style.opacity = 0;
    btnPrev.style.cursor = "default";
  } else {
    btnPrev.disabled = false;
    btnPrev.style.opacity = 0.5;
    btnPrev.style.cursor = "pointer";
  }
};

updateGallery();
