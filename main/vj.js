document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  // Select only content images (exclude background/logo by class)
  const zoomableImages = document.querySelectorAll("img:not(.background-virus):not(.logo):not(.no-zoom)");

  zoomableImages.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
  });

  // Also close on clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
      lightboxImg.src = "";
    }
  });

  // Carousel Logic
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');

  rightBtn.addEventListener('click', () => {
    track.appendChild(track.firstElementChild);
  });

  leftBtn.addEventListener('click', () => {
    track.insertBefore(track.lastElementChild, track.firstElementChild);
  });
});
