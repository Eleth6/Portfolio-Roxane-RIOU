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

// Language

const langue = document.getElementsByTagName('body')[0]
const languageBtn = document.getElementById('language');

languageBtn.addEventListener('click', function() {
  if (langue.classList.contains("english")) {
    langue.classList.remove("english")
    langue.classList.add("french")
  } else {
    langue.classList.add("english")
    langue.classList.remove("french")
  }
});

// Formation boutons

const allcvBtns = document.getElementsByClassName('cvBtn');
const allcvSects = document.getElementsByClassName('cvSect');
let saveActuali = 0

for (let i=0; i<allcvBtns.length; i++) {
  allcvBtns[i].addEventListener('click', function() {
    allcvSects[saveActuali].style.display = "none"
    allcvBtns[saveActuali].classList.remove("active")
      
    allcvSects[i].style.display = "flex"
    allcvBtns[i].classList.add("active")
    saveActuali = i

    console.log(i)
    console.log(saveActuali)
  });
}

// A propos boutons

const allAboutBtns = document.getElementsByClassName('aboutBtn');
const allAboutSects = document.getElementsByClassName('aboutCard');
let saveActuali2 = 0

for (let i=0; i<allAboutBtns.length; i++) {
  allAboutBtns[i].addEventListener('click', function() {
    allAboutSects[saveActuali2].style.display = "none"
    allAboutBtns[saveActuali2].classList.remove("active")
      
    allAboutSects[i].style.display = "flex"
    allAboutBtns[i].classList.add("active")
    saveActuali2 = i
  });
}

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