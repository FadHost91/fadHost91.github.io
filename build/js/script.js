// Файл скриптов
// Variables - переменные

let scrollButton = document.querySelector(".intro-section__button");


// Smooth scroll - плавный скролл к любому блоку

if (scrollButton) {
  scrollButton.addEventListener("click", () => {
    var addSmoothScroll = function () {
      var moveTo = new MoveTo({
        duration: 1200,
      });
      const target = document.querySelector(".reasons-section");
      moveTo.move(target);
    };
    addSmoothScroll();
  });
}
