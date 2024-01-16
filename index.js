document.addEventListener('DOMContentLoaded' , () => {

  let checkboxYes = document.querySelector('.js-checkbox-yes');
  let checkboxNo = document.querySelector('.js-checkbox-no');
  let step1 = document.querySelector('.js-step-1');
  let step2 = document.querySelector('.js-step-2');
  let checkboxImg = document.querySelector('.js-img-yes');
  let checkboxImgNo = document.querySelector('.js-img-no');
  let burgerMenu = document.querySelector('.js-burger');
  let header = document.querySelector('.js-header');
  let loader = document.querySelector('.js-loader-section');
  let flag = 0;

  let elements = document.querySelectorAll('.js-element-animation');
  let options = {
      threshold: [0.1]
  };

  burgerMenu.addEventListener('click', showMenu);

  // show blocks by scroll
  if (elements) {
      let observer = new IntersectionObserver(onEntry, options);

      function onEntry(entry) {
          entry.forEach(change => {
              if (change.isIntersecting) {
                  change.target.classList.add('element-show');
                  if (change.target.classList.contains('js-skills-list')) {
                    let skillsList = document.querySelector('.js-skills-list');
                    let skillsItem = skillsList.querySelectorAll('li');
                    skillsItem.forEach(item => {
                      item.classList.add('appear');
                    })
                  }
              }
          });
      }
  
      for (let elem of elements) {
          observer.observe(elem);
      }
  }

  checkboxYes.addEventListener('click', () => {
    checkboxImg.classList.add('checked');
    loader.classList.remove('hide');
    step1.classList.add('hide');
    setTimeout(function() {
      loader.classList.add('hide');
      step2.classList.remove('hide');
    }, 2000)
  })

  checkboxImgNo.addEventListener('mouseover', () => {
    flag += 1;
    if (flag % 2 === 0) {
      checkboxImgNo.style.transform = "translateX(250%)";
    } else {
      checkboxImgNo.style.transform = "translateY(200%)";
    }
    if (flag === 5) {
      checkboxImgNo.style.transform = "translate(0, 0)";
      flag = 0;
    }
  })


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      function showMenu() {
        header.classList.toggle('active');
      }
})