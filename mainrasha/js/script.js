// custom-select

// #select - селектор для выбора элемента, который необходимо инициализировать как CustomSelect
if (
  document.querySelector("#select-1") ||
  document.querySelector("#select-2")
) {
  const select1 = new CustomSelect("#select-1");
  const select2 = new CustomSelect("#select-2");
}

// slider

if (document.querySelector(".other-blogers__list")) {
  // let carousel = document.querySelector(".other-blogers__list");
  //   let i = 1;
  //   for(let li of carousel.querySelectorAll('li')) {
  //     li.style.position = 'relative';
  //     i++;
  //   }
  // console.log(li)
  /* конфигурация */
  let width = 326; // ширина картинки
  let count = 4; // видимое количество изображений

  let list = document.querySelector(".other-blogers__list");
  let listElems = list.querySelectorAll(".blogers-item");

  let position = 0; // положение ленты прокрутки
  console.log(listElems);
  document.querySelector(".button-left").onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
    console.log(position)
  };

  document.querySelector(".button-right").onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + "px";
    console.log(position)
  };
}
