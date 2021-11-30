// Переменные

let featuresSlider = document.querySelector(".features");
let featuresSlides = document.querySelectorAll(".features__item");
let reasonsSlides = document.querySelectorAll(".reasons-list__item")
let featuresCrumbs = document.querySelectorAll(".features-block .slider-crumbs__svg");
let reasonsCrumbs = document.querySelectorAll(".reasons-section .slider-crumbs__svg");
let reviewSlides = document.querySelectorAll(".review-item")
let reviewCrumbs = document.querySelectorAll(".review-section .slider-crumbs__svg");
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
  for (let j = 0; j < featuresSlides.length; j++) {
    featuresSlides[j].addEventListener("touchstart", touchStart, false);
    featuresSlides[j].addEventListener("touchmove", touchMove, false);
    featuresSlides[j].addEventListener("touchend", switchSlides, false);
  }

  for (let k = 0; k < reasonsSlides.length; k++) {
    reasonsSlides[k].addEventListener("touchstart", touchStart, false);
    reasonsSlides[k].addEventListener("touchmove", touchMove, false);
    reasonsSlides[k].addEventListener("touchend", switchReasonsSlides, false);
  }

  for (let l = 0; l < reasonsSlides.length; l++) {
    reviewSlides[l].addEventListener("touchstart", touchStart, false);
    reviewSlides[l].addEventListener("touchmove", touchMove, false);
    reviewSlides[l].addEventListener("touchend", switchReviewSlides, false);
  }

  function touchStart(evt) {
    x1 = evt.touches[0].clientX;
    return x1;
  }

  function touchMove(evt) {
    x2 = evt.touches[0].clientX;
    return x2;
  }


//   function switchSlides(slidesArr, crumbsArr, addClass) {
//     let diff = x2 - x1;
//     for (let i = 0; i < slidesArr.length; i++) {
//       let slide = slidesArr[i];
//       let crumb = crumbsArr[i];
//       if (diff < 0) {
//         if (evt.target === slide && i < slidesArr.length - 1) {
//           let target = evt.target;
//           target.classList.add(addClass);
//           if (i < slidesArr.length - 1) {
//             let nextSlide = slidesArr[i + 1];
//             // console.log(nextSlide);
//             nextSlide.classList.remove(addClass);
//             // crumbs
//             crumb.classList.remove("slider-crumbs__svg--active");
//             let nextCrumb = crumbsArr[i + 1];
//             nextCrumb.classList.add("slider-crumbs__svg--active");
//           } else {
//             return;
//           }
//         }
//       } else {
//         // let prevSlide = slidesArr[i - 1];
//     }
//   }
//   }
//   switchSlides(featuresSlides, featuresCrumbs, "features-item__hidden")
// }
// FEATURES BLOCK
  function switchSlides(evt) {
    let diff = x2 - x1;
    for (let i = 0; i < featuresSlides.length; i++) {
      let slide = featuresSlides[i];
      let crumb = featuresCrumbs[i];
      if (diff < 0) {
        if (evt.target === slide && i < featuresSlides.length - 1) {
          let target = evt.target;
          target.classList.add("features__item--hidden");
          if (i < featuresSlides.length - 1) {
            let nextSlide = featuresSlides[i + 1];
            // console.log(nextSlide);
            nextSlide.classList.remove("features__item--hidden");
            // crumbs
            crumb.classList.remove("slider-crumbs__svg--active");
            let nextCrumb = featuresCrumbs[i + 1];
            nextCrumb.classList.add("slider-crumbs__svg--active");
          } else {
            return;
          }
        }
      } else {
        let prevSlide = featuresCrumbs[i - 1];
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
// REASONS BLOCK
  function switchReasonsSlides(evt) {
    let diff = x2 - x1;

    for (let m = 0; m < reasonsSlides.length; m++) {
      let slide = reasonsSlides[m];
      let crumb = reasonsCrumbs[m];
      if (diff < 0) {
        if (evt.target === slide && m < reasonsSlides.length - 1) {
          let target = evt.target;
          console.log(target)
          target.classList.add("reasons-list__item--hidden");
          if (m < reasonsSlides.length - 1) {
            let nextSlide = reasonsSlides[m + 1];
            // console.log(nextSlide);
            nextSlide.classList.remove("reasons-list__item--hidden");
            // crumbs
            crumb.classList.remove("slider-crumbs__svg--active");
            let nextCrumb = reasonsCrumbs[m + 1];
            nextCrumb.classList.add("slider-crumbs__svg--active");
          } else {
            return;
          }
        }
      } else {
        return
        // let prevSlide = reasonsSlides[m - 1];
        // console.log(prevSlide);

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

  // REVIEWSLIDER
  function switchReviewSlides(evt) {
    let diff = x2 - x1;
    for (let n = 0; n < reviewSlides.length; n++) {
      let slide = reviewSlides[n];
      let crumb = reviewCrumbs[n];
      if (diff < 0) {
        if (evt.target === slide && n < reviewSlides.length - n) {
          let target = evt.target;
          target.classList.add("review-item--hidden");
          if (n < reviewSlides.length - 1) {
            let nextSlide = reviewSlides[n + 1];
            // console.log(nextSlide);
            nextSlide.classList.remove("review-item--hidden");
            // crumbs
            crumb.classList.remove("slider-crumbs__svg--active");
            let nextCrumb = reviewCrumbs[n + 1];
            nextCrumb.classList.add("slider-crumbs__svg--active");
          } else {
            return;
          }
        }
      } else {
        return
        // let prevSlide = reviewSlides[n - 1];
        // console.log(prevSlide);

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
