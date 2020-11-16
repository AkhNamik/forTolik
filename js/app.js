var slideIndex = 1
showSlides(slideIndex)
function currentSlide(n) {
  showSlides((slideIndex = n))
}
function showSlides(n) {
  var x = window.matchMedia("(max-width: 768px)")
  var slides = document.getElementsByClassName("item")
  console.log(slides);
  var i
  var dots = document.getElementsByClassName("slider-dots_item")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  if(x.matches){
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }
  } else{
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block"
  }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  dots[slideIndex - 1].className += " active"
  slides[slideIndex - 1].style.display = "block"
}



