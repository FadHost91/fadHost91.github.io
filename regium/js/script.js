// Переменные

let featuresSlider = document.querySelector(".features");
let slides = document.querySelectorAll(".features__item");
let crumbs = document.querySelectorAll(".slider-crumbs__svg");
const mediaQuery = window.matchMedia("(max-width: 767px)");
let introButton = document.querySelector(".intro-section__button");
let promoButton = document.querySelector(".promo-block__button");
let emailInput = document.querySelector("#email");
let form = document.querySelector(".submit-block__form form");
let val = null;

let x1 = null;
let x2 = null;

// Слайдер
// Надо добавить touchstart и touchmove

if (mediaQuery.matches) {
  for (let j = 0; j < slides.length; j++) {
    slides[j].addEventListener("touchstart", touchStart, false);
    slides[j].addEventListener("touchmove", touchMove, false);
    slides[j].addEventListener("touchend", switchSlides, false);
  }

  function touchStart(evt) {
    x1 = evt.touches[0].clientX;
    return x1;
  }

  function touchMove(evt) {
    x2 = evt.touches[0].clientX;
    return x2;
  }

  function switchSlides(evt) {
    let diff = x2 - x1;
    for (let i = 0; i < slides.length; i++) {
      let slide = slides[i];
      let crumb = crumbs[i];
      if (diff < 0) {
        if (evt.target === slide && i < slides.length - 1) {
          let target = evt.target;
          target.classList.add("features__item--hidden");
          if (i < slides.length - 1) {
            let nextSlide = slides[i + 1];
            // console.log(nextSlide);
            nextSlide.classList.remove("features__item--hidden");
            // crumbs
            crumb.classList.remove("slider-crumbs__svg--active");
            let nextCrumb = crumbs[i + 1];
            nextCrumb.classList.add("slider-crumbs__svg--active");
          } else {
            return;
          }
        }
      } else {
        let prevSlide = slides[i - 1];
        console.log(prevSlide);

        // crumbs
        // let prevCrumb = crumbs[i - 1];
        // prevCrumb.classList.add("slider-crumbs__svg--active");
      }
      //
      //     let slide = slides[i];
      //     slides[i].classList.add("features__item--hidden");
      //     let nextSlide = slide[evt.target + 1];
      //     console.log(nextSlide);
      //     // nextSlide.classList.remove("features__item--hidden");

      //   }
    }
  }
}

// smooth scroll

if (introButton && promoButton) {
  const target = document.querySelector(".submit-block");
  introButton.addEventListener("click", () => {
    var addSmoothScroll = function () {
      var moveTo = new MoveTo({
        duration: 1200,
      });
      moveTo.move(target);
    };
    addSmoothScroll();
  });
  promoButton.addEventListener("click", () => {
    var addSmoothScroll = function () {
      var moveTo = new MoveTo({
        duration: 1200,
      });
      moveTo.move(target);
    };
    addSmoothScroll();
  });
}

// Валидация формы

function validateInput(input) {
  let pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
  if (!input.value.match(pattern)) {
    input.classList.add("has-error");
    val = false;
  } else {
    input.classList.add("has-success");
    val = true;
  }
  return val
}

function cleanInputs() {
  emailInput.addEventListener("input", function () {
    if (val === false) {
      emailInput.classList.remove("has-error");
    }
    emailInput.classList.remove("has-success");
  });
}

function initFormValidate() {
  if (!form) {
    return;
  }
  cleanInputs()
  form.noValidate = true;
  form.addEventListener("submit", function (e) {
    validateInput(emailInput);
    e.preventDefault();
    if (validateInput(emailInput)) {
      setTimeout(function () {
        form.reset();
      }, 500);
    }
  });
}

initFormValidate();
