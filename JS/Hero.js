const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('puntos');
let index = 0;
let slideInterval;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    moveToSlide(i);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function moveToSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');
  index = i;
}

function startInterval() {
  slideInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    moveToSlide(index);
  }, 6000);
}

function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

startInterval();
