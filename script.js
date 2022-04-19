// Scroll Spy

const allSection = document.getElementsByTagName("section")
const allNameSection = document.querySelectorAll("header>nav>a")

setInterval(function(){
  for (let i in Array.from(allSection)){
    topSection = allSection[i].getBoundingClientRect().top;
    if(topSection >= -400 && topSection <= (window.innerHeight || document.documentElement.clientHeight)-400){
      allNameSection[i].classList.add("active");
    } else {
      allNameSection[i].classList.remove("active");
    };
  }}, 50
)

// Formation boutons

const allcvBtns = document.getElementsByClassName('cvBtn');
const allcvSects = document.getElementsByClassName('cvSect');

allcvBtns[0].addEventListener('click', function() {
    allcvSects[0].style.display = "flex"
    allcvSects[1].style.display = "none"
    allcvSects[2].style.display = "none"
    allcvSects[3].style.display = "none"

    allcvBtns[0].classList.add('active')
    allcvBtns[1].classList.remove('active')
    allcvBtns[2].classList.remove('active')
    allcvBtns[3].classList.remove('active')
});

allcvBtns[1].addEventListener('click', function() {
    allcvSects[0].style.display = "none"
    allcvSects[1].style.display = "flex"
    allcvSects[2].style.display = "none"
    allcvSects[3].style.display = "none"

    allcvBtns[0].classList.remove('active')
    allcvBtns[1].classList.add('active')
    allcvBtns[2].classList.remove('active')
    allcvBtns[3].classList.remove('active')
});

allcvBtns[2].addEventListener('click', function() {
    allcvSects[0].style.display = "none"
    allcvSects[1].style.display = "none"
    allcvSects[2].style.display = "flex"
    allcvSects[3].style.display = "none"

    allcvBtns[0].classList.remove('active')
    allcvBtns[1].classList.remove('active')
    allcvBtns[2].classList.add('active')
    allcvBtns[3].classList.remove('active')
});

allcvBtns[3].addEventListener('click', function() {
    allcvSects[0].style.display = "none"
    allcvSects[1].style.display = "none"
    allcvSects[2].style.display = "none"
    allcvSects[3].style.display = "flex"

    allcvBtns[0].classList.remove('active')
    allcvBtns[1].classList.remove('active')
    allcvBtns[2].classList.remove('active')
    allcvBtns[3].classList.add('active')
});

// A propos boutons

const allAboutBtns = document.getElementsByClassName('aboutBtn');
const allAboutSects = document.getElementsByClassName('aboutCard');

allAboutBtns[0].addEventListener('click', function() {
    allAboutSects[0].style.display = "flex"
    allAboutSects[1].style.display = "none"
    allAboutSects[2].style.display = "none"
    allAboutSects[3].style.display = "none"

    allAboutBtns[0].classList.add('active')
    allAboutBtns[1].classList.remove('active')
    allAboutBtns[2].classList.remove('active')
    allAboutBtns[3].classList.remove('active')
});

allAboutBtns[1].addEventListener('click', function() {
    allAboutSects[0].style.display = "none"
    allAboutSects[1].style.display = "flex"
    allAboutSects[2].style.display = "none"
    allAboutSects[3].style.display = "none"

    allAboutBtns[0].classList.remove('active')
    allAboutBtns[1].classList.add('active')
    allAboutBtns[2].classList.remove('active')
    allAboutBtns[3].classList.remove('active')
});

allAboutBtns[2].addEventListener('click', function() {
    allAboutSects[0].style.display = "none"
    allAboutSects[1].style.display = "none"
    allAboutSects[2].style.display = "flex"
    allAboutSects[3].style.display = "none"

    allAboutBtns[0].classList.remove('active')
    allAboutBtns[1].classList.remove('active')
    allAboutBtns[2].classList.add('active')
    allAboutBtns[3].classList.remove('active')
});

allAboutBtns[3].addEventListener('click', function() {
    allAboutSects[0].style.display = "none"
    allAboutSects[1].style.display = "none"
    allAboutSects[2].style.display = "none"
    allAboutSects[3].style.display = "flex"

    allAboutBtns[0].classList.remove('active')
    allAboutBtns[1].classList.remove('active')
    allAboutBtns[2].classList.remove('active')
    allAboutBtns[3].classList.add('active')
});

// Carousel

    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image slider next button
    nextBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber++;

      if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    });

    //image slider previous button
    prevBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber--;

      if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    });

    //image slider autoplay
    var playSlider;

    var repeater = () => {
      playSlider = setInterval(function(){
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
          slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      }, 5000);
    }
    repeater();

    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
      clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
      repeater();
    });