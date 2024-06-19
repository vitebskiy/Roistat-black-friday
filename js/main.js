const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.body;
const navItems = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--active");
});

navItems.forEach((element) => {
  element.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger.classList.remove("burger--active");
    nav.classList.remove("nav--active");
  });
});

let modalBtn = document.getElementById("open-modal-btn");
let myModal = document.getElementById("my-modal");
let closeBtn = document.getElementById("close-my-modal-btn");

// Кнока открыть модальное окно
modalBtn.addEventListener("click", () => {
  myModal.classList.add("modal--active");
});

// Закрытие окна по нажатие на крестик
closeBtn.addEventListener("click", () => {
  myModal.classList.remove("modal--active");
});

// Закрытие модальное окна по нажатию на Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    myModal.classList.remove("modal--active");
  }
});
