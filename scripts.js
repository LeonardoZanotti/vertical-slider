const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideRight.style.top = `-${(slidesLength - 1) * 100}vh`;

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex--;
    activeSlideIndex < 0 && (activeSlideIndex = slidesLength - 1);
  } else if (direction === 'down') {
    activeSlideIndex++;
    activeSlideIndex > slidesLength - 1 && (activeSlideIndex = 0);
  }

  slideRight.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
  slideLeft.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
}
