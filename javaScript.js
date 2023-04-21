let slideIndex = 1;
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let timeout;

// Next/previous controls
const plusSlides = (n) => {
    if (n === 1) {
        // showSlides(slideIndex += n);
        showSlides(slideIndex);
    } else {
        showSlides(slideIndex -= n);
    }
}

// Thumbnail image controls
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (!!timeout) { clearTimeout(timeout) }
    timeout = setTimeout(function () { showSlides(n) }, 3000); // Change slider item every 3 seconds
}

showSlides(slideIndex);