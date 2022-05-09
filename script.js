const slides = document.querySelectorAll('.slide');

slides.forEach((slide, num) => {
  slide.addEventListener('click', () => {
    clearActiveClasses();

    slide.classList.add('active');
  });
});

function clearActiveClasses() {
  for (let slide of slides) {
    slide.classList.remove('active');
  }
}
