// Variables

let nav = document.querySelector(".nav");
let navButton = document.querySelector(".nav__button");
let mainMenu = document.querySelector(".main-menu");
let header = document.querySelector(".header");
var menuLinks = document.querySelectorAll(".main-menu__link");
let introButton = document.querySelector(".intro-section__button");

// Open/close menu

let toggleMenu = function () {
  if (navButton) {
    navButton.addEventListener("click", function () {
      if (header.classList.contains("header--opened")) {
        hideMenu();
      } else {
        openMenu();
      }
    });
  }
};

let openMenu = function () {
  bodyScrollLock.disableBodyScroll(mainMenu);
  navButton.classList.add("nav__button--opened");
  navButton.classList.remove("nav__button--closed");
  mainMenu.classList.remove("main-menu--closed");
  mainMenu.classList.add("main-menu--opened");
  header.classList.add("header--opened");
  nav.classList.remove("nav--closed");
  nav.classList.add("nav--opened");
};

let hideMenu = function () {
  bodyScrollLock.enableBodyScroll(mainMenu);
  header.classList.remove("header--opened");
  nav.classList.remove("nav--opened");
  nav.classList.add("nav--closed");
  navButton.classList.remove("nav__button--opened");
  navButton.classList.remove("nav__button--closed");
  mainMenu.classList.add("main-menu--closed");
  mainMenu.classList.remove("main-menu--opened");
};

let clickOnLink = function () {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function () {
      hideMenu();
    });
  });
};

if (nav) {
  clickOnLink();
  toggleMenu();
}

// Smooth scroll

let addSmoothScroll = function () {
  let moveTo = new MoveTo({
    duration: 1200,
  });

  let triggers = menuLinks;

  triggers.forEach(function (trigger) {
    moveTo.registerTrigger(trigger);
  });

  if (introButton) {
    introButton.addEventListener("click", function () {
      let target = document.querySelector(".description-section");
      moveTo.move(target);
    });
  }
};

addSmoothScroll();

// Slider

// Найдем кнопки, слайды

let leftButton = document.querySelector(".review-section__button--left");
let rightButton = document.querySelector(".review-section__button--right");
let slideList = document.querySelector(".review-list");
let slides = document.querySelectorAll(".review-item");
let slidesLength = slides.length;
let counter = 0;
let crumbCounter = 0;
let sliderCrumbsImg = document.querySelectorAll(".slider-crumbs__svg");
let smallDesktopMedia = window.matchMedia("(max-width: 1219px)");
let tabletMedia = window.matchMedia("(max-width: 1023px)");

rightButton.classList.add("review-section__button--active");
sliderCrumbsImg[0].classList.add("slider-crumbs__svg--active");

let changeButtonActivity = function (button) {
  button.classList.remove("review-section__button--active");
  button.disabled = true;
};

let changeRightButtonActivity = function () {
  rightButton.classList.remove("review-section__button--active");
  rightButton.disabled = true;
};

let changeLeftButtonActivity = function () {
  leftButton.classList.remove("review-section__button--active");
  leftButton.disabled = true;
};

leftButton.addEventListener("click", function () {
  if (!smallDesktopMedia.matches && counter > 0) {
    counter -= 3;
    crumbCounter--;
    let itemWidth = 1118 / 3;
    slideList.style.transform =
      "translateX(" + -1 * counter * itemWidth + "px)";

    rightButton.classList.add("review-section__button--active");
    rightButton.disabled = false;
    sliderCrumbsImg[crumbCounter].classList.add("slider-crumbs__svg--active");
    sliderCrumbsImg[crumbCounter + 1].classList.remove(
      "slider-crumbs__svg--active"
    );
  }
  if (counter === 0) {
    changeButtonActivity(leftButton);
  } else if (smallDesktopMedia.matches) {
    if (counter > 0) {
      counter -= 2;
      crumbCounter--;
      let itemWidth = 766 / 2;
      slideList.style.transform =
        "translateX(" + -1 * counter * itemWidth + "px)";

      rightButton.classList.add("review-section__button--active");
      rightButton.disabled = false;
      sliderCrumbsImg[crumbCounter].classList.add("slider-crumbs__svg--active");
      sliderCrumbsImg[crumbCounter + 1].classList.remove(
        "slider-crumbs__svg--active"
      );
    }
    if (counter === 0) {
      changeButtonActivity(leftButton);
    }
  }
});

rightButton.addEventListener("click", function () {
  if (!smallDesktopMedia.matches && counter < slidesLength) {
    counter += 3;
    crumbCounter++;
    const itemWidth = 1118 / 3;
    slideList.style.transform =
      "translateX(" + -1 * counter * itemWidth + "px)";

    leftButton.classList.add("review-section__button--active");
    leftButton.disabled = false;
    sliderCrumbsImg[crumbCounter - 1].classList.remove(
      "slider-crumbs__svg--active"
    );
    sliderCrumbsImg[crumbCounter].classList.add("slider-crumbs__svg--active");
    if (counter > slidesLength - 3 || counter % (slidesLength - 3) === 0) {
      changeButtonActivity(rightButton);
    }
  } else if (smallDesktopMedia.matches) {
    if (counter < slidesLength) {
      counter += 2;
      crumbCounter++;
      const itemWidth = 766 / 2;
      slideList.style.transform =
        "translateX(" + -1 * counter * itemWidth + "px)";

      leftButton.classList.add("review-section__button--active");
      leftButton.disabled = false;
      sliderCrumbsImg[crumbCounter - 1].classList.remove(
        "slider-crumbs__svg--active"
      );
      sliderCrumbsImg[crumbCounter].classList.add("slider-crumbs__svg--active");
      if (counter > slidesLength - 2 || counter % (slidesLength - 2) === 0) {
        changeButtonActivity(rightButton);
      }
    }
  }
});

if (tabletMedia.matches) {
  sliderCrumbsImg.forEach(function (btn) {
    btn.addEventListener("click", function (evt) {
      btn.classList.add("slider-crumbs__svg--active");
      let inactiveButtons = Array.from(sliderCrumbsImg).filter(function (
        buttons
      ) {
        return buttons != btn;
      });
      inactiveButtons.forEach(function (button) {
        button.classList.remove("slider-crumbs__svg--active");
      });
    });
  });
}
