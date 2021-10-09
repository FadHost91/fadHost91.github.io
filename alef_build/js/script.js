"use strict";
// Variables - переменные

let catsList = document.querySelector(".cats-list");
let showMoreButton = document.querySelector(".cats-list__button");
// Переменная для показа котов, она меняется при функции showMoreCats
let maxShowCatsCount = 6;
// массив котов, в который при функции getData инициализируется массив загруженных котов
let cats = [];
let priceButton = document.querySelector(".sort-block__button--price");
let ageButton = document.querySelector(".sort-block__button--age");
// Тип сортировки, в нее вкладывается значение, какая сортировка идет
let sortType = "";
// С помощью этого флага идет сортировка по возрастанию/убыванию
let sortDirection = 1;
let addedMessage = document.querySelector(".added-modal");
let addedMessageButton = document.querySelector(".added-modal__button");
let upButton = document.querySelector(".main-section__scroll-button");
let navButton = document.querySelector(".nav__button");
let navTelephone = document.querySelector(".nav__telephone");
let mainMenu = document.querySelector(".main-menu");
let form = document.querySelector("form");
let emailInput = document.querySelector("#email");
let agreementCheckbox = document.querySelector("#agreement");

// Отрисовывает актуальное сортированное количество котов

function render() {
  // при вызове функции очищает список котов
  catsList.innerHTML = "";
  // объявляется переменная с рендерными котами, в которой с помощью метода slice
  // возвращается массив с 0 элемента до меньшего числа между массивом котов и переменной с числом показа котов
  let catsToRender = cats.slice(0, Math.min(cats.length, maxShowCatsCount));
  if (sortType === "price") {
    catsToRender = catsToRender.sort(
      (a, b) => a.price.localeCompare(b.price) * sortDirection
    );
  } else if (sortType === "age") {
    catsToRender = catsToRender.sort(
      (a, b) => a.age.localeCompare(b.age) * sortDirection
    );
  }
  for (let i = 0; i < catsToRender.length; i++) {
    let catElement = createCatElement(catsToRender[i]);
    catsList.appendChild(catElement);
  }
}

// Получение данных для отрисовки карточки

function getData() {
  fetch("js/cats.json", {
    method: "GET",
    credentials: "same-origin",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (loadedCats) {
      cats = loadedCats;
      render();
    });
}

function loadData() {
  window.addEventListener("load", function () {
    getData();
  });
}

loadData();

// Показ еще котов

function showMoreCats() {
  maxShowCatsCount += 20;
  render();
}

showMoreButton.addEventListener("click", function () {
  showMoreCats();
});

// Функция отрисовки карточки

let renderCatCard = function (cats) {
  cats.forEach(function (catItem) {
    catsList.appendChild(catItem);
  });
};

function createCatElement(cat) {
  // Cоздание элементов
  let catItem = document.createElement("li");
  let catImg = document.createElement("img");
  let catName = document.createElement("h3");
  let statsList = document.createElement("ul");
  let likeButton = document.createElement("button");
  likeButton.classList.add("cats-item__like-button");
  let discountFlag = document.createElement("span");
  discountFlag.classList.add("cats-item__discount");
  discountFlag.textContent = "-40%";

  // Создание элементов списка внутри карточки
  let colorItem = document.createElement("li");
  let ageItem = document.createElement("li");
  let pawsItem = document.createElement("li");
  colorItem.classList.add("stats-list__item");
  ageItem.classList.add("stats-list__item");
  pawsItem.classList.add("stats-list__item");
  // Создание спанов внутри элементов списка в карточке

  // Цвет
  let catColor = document.createElement("span");
  let colorSpan = document.createElement("span");
  colorSpan.textContent = "окрас";
  colorItem.appendChild(catColor);
  colorItem.appendChild(colorSpan);
  // Возраст
  let catAge = document.createElement("span");
  catAge.classList.add("bold");
  let ageSpan = document.createElement("span");
  ageSpan.textContent = "Возраст";
  ageItem.appendChild(catAge);
  ageItem.appendChild(ageSpan);
  // Лапы
  let catPaws = document.createElement("span");
  catPaws.classList.add("bold");
  let pawSpan = document.createElement("span");
  pawSpan.textContent = "Кол-во лап";
  pawsItem.appendChild(catPaws);
  pawsItem.appendChild(pawSpan);
  // Создание параграфа с ценой
  let priceItem = document.createElement("p");
  let purchaseButton = document.createElement("button");
  // Добавление контента
  statsList.classList.add("stats-list");
  catItem.classList.add("cats-list__item");
  catItem.classList.add("cats-item");
  catName.classList.add("cats-item__title");
  priceItem.classList.add("cats-item__price");
  catImg.src = cat.img;
  catName.textContent = cat.name;
  catColor.textContent = cat.color;
  catAge.textContent = cat.age;
  catPaws.textContent = cat.paws;
  priceItem.textContent = cat.price;
  purchaseButton.classList.add("cats-item__button");
  purchaseButton.textContent = "Купить";
  if (cat.sold === "true") {
    purchaseButton.classList.add("cats-item__button--sold");
    purchaseButton.textContent = "Продан";
  }
  // добавление в список статов элементов
  statsList.appendChild(colorItem);
  statsList.appendChild(ageItem);
  statsList.appendChild(pawsItem);
  // Добавление элементов в карточку
  catItem.appendChild(catImg);
  if (cat.discount === "true") {
    catItem.appendChild(discountFlag);
  }
  catItem.appendChild(likeButton);
  catItem.appendChild(catName);
  catItem.appendChild(statsList);
  catItem.appendChild(priceItem);
  catItem.appendChild(purchaseButton);

  // Добавление функционала "добавить в избранное"

  function addToFavourites() {
    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("cats-item__like-button--active");
      if (cat.added === "false") {
        cat.added = "true";
        addedMessage.classList.remove("added-modal--hidden");
      } else if (cat.added === "true") {
        cat.added = "false";
      }
    });
  }

  function hideModal() {
    if (addedMessageButton) {
      addedMessageButton.addEventListener("click", function () {
        addedMessage.classList.add("added-modal--hidden");
      });
    }
  }

  addToFavourites();
  hideModal();
  return catItem;
}

// Сортировка

function sortByPrice() {
  // Если значение переменной != цене, то присваивается значение, и направление 1 (по убыванию)
  if (sortType !== "price") {
    sortType = "price";
    sortDirection = 1;
  } else if (sortDirection === 1) {
    sortDirection = -1;
  } else {
    sortType = "";
  }
  render();
}

function sortByAge() {
  if (sortType !== "age") {
    sortType = "age";
    sortDirection = 1;
  } else if (sortDirection === 1) {
    sortDirection = -1;
  } else {
    sortType = "";
  }
  render();
}

if (priceButton) {
  priceButton.addEventListener("click", function () {
    sortByPrice();
  });
}

if (ageButton) {
  ageButton.addEventListener("click", function () {
    sortByAge();
  });
}

// Реализация кнопки "наверх"

window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    upButton.classList.add("main-section__scroll-button--show");
  } else {
    upButton.classList.remove("main-section__scroll-button--show");
  }
});

if (upButton) {
  upButton.addEventListener("click", () => {
    var addSmoothScroll = function () {
      var moveTo = new MoveTo({
        duration: 1200,
      });
      const target = document.querySelector("#main");
      moveTo.move(target);
    };
    addSmoothScroll();
  });
}

// Открытие/закрытие меню

function openMenu() {
  if (mainMenu && navButton && navTelephone) {
    mainMenu.classList.toggle("main-menu--closed");
    navTelephone.classList.toggle("nav__telephone--closed");
  }
}

if (navButton) {
  navButton.addEventListener("click", function () {
    openMenu();
  });
}

// Валидация формы

function validateInput(input) {
  let flag = true;
  let pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
  if (!input.value.match(pattern)) {
    flag = false;
    input.classList.add("has-error");
  }
  return flag;
}

function validateCheckbox(checkbox) {
  let flag = true;
  if (!checkbox.checked) {
    flag = false;
    checkbox.classList.add("has-error");
  }
  return flag;
}

function cleanInputs() {
  emailInput.addEventListener("input", function () {
    emailInput.classList.remove("has-error");
  });
  agreementCheckbox.addEventListener("click", function() {
    agreementCheckbox.classList.remove("has-error")
  })
}

function initFormValidate() {
  if (!form) {
    return;
  }
  form.noValidate = true;
  cleanInputs();
  form.addEventListener("submit", function (e) {

    validateInput(emailInput);
    validateCheckbox(agreementCheckbox);
    e.preventDefault();
    if (validateInput(emailInput) && validateCheckbox(agreementCheckbox)) {

      setTimeout(function () {
        form.reset();
      }, 500);
    }
  });
}

initFormValidate();
