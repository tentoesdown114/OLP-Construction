const imageGroups = [
  [
    "imgs/Attachments-OLP%20images%20/image0.jpeg",
    "imgs/Attachments-OLP%20images%20/image1.jpeg",
    "imgs/Attachments-OLP%20images%20/image2.jpeg",
    "imgs/Attachments-OLP%20images%20/image3.jpeg",
    "imgs/Attachments-OLP%20images%20/image4.jpeg",
  ],
  [
    "imgs/Attachments-OLP%20images%20/image5.jpeg",
    "imgs/Attachments-OLP%20images%20/image6.jpeg",
    "imgs/Attachments-OLP%20images%20/image7.jpeg",
    "imgs/Attachments-OLP%20images%20/image8.jpeg",
    "imgs/Attachments-OLP%20images%20/image9.jpeg",
  ],
];

const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach((carousel, index) => {
  const slides = imageGroups[index] || [];
  const image = carousel.querySelector('.slide-image');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');

  let currentIndex = 0;

  function renderSlide() {
    if (!slides.length || !image) return;
    image.src = slides[currentIndex];
    image.alt = `Project view ${currentIndex + 1}`;
  }

  prevButton?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    renderSlide();
  });

  nextButton?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlide();
  });

  renderSlide();
});
