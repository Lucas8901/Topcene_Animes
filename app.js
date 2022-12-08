const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video');

var index = 0;

function nextSlide(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prevSlide(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

const slideShowText= document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');

var i = 0;

function nextSlideText(){
  slidesText[i].classList.remove('active');
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add('active');
}

function prevSlideText(){
  slidesText[i].classList.remove('active');
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add('active');
}