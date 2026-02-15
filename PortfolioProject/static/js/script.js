window.onload = function () {

    window.addEventListener("scroll", function () {

        const elements = document.querySelectorAll(".intro-animation");

        elements.forEach(el => {
            if (isScrolledIntoView(el)) {
                el.style.animation = null;
            } else {
                el.style.animation = 'none';
                el.offsetHeight;
            }
        })
    });

    //Scroll To
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("load", function (event){
            event.preventDefault();
        })
    });


    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            // Scroll to top first to avoid instant jump
            setTimeout(() => {
                target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100); // Delay to ensure DOM is ready
        }
    }


    showSlides(slideIndex = 1);
}

//Slide Show
function isScrolledIntoView(elem) {
    const rect = elem.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let prevSlide = document.getElementById("previous-slide");
    let nextSlide = document.getElementById("next-slide");
    let present = document.getElementById("pointer");


    if(prevSlide && nextSlide && present){
        prevSlide.id = "";
        nextSlide.id = "";
        present.id = "";
    }

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        //slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList += " active";

    slides[mod(slideIndex - 2, slides.length)].id = "previous-slide";
    slides[mod(slideIndex, slides.length)].id = "next-slide";
    slides[slideIndex - 1].id = "pointer";
}

function mod(index, length){
    if (index > length-1) {
       return 0;
    }else if (index < 0) {
       return length-1;
    }else{
        return index;
    }
}

//Scroll to
function setScrollTo(targetId){
    const target = document.querySelector(targetId);
        if (target) {
            // Scroll to top first to avoid instant jump
            setTimeout(() => {
                target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100); // Delay to ensure DOM is ready
        }
}


