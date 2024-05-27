const bars = document.querySelector(".res-nav");
const ul = document.querySelector(".nav-links");
const li = document.querySelectorAll(".nav-links li");
const model = document.querySelector(".model-bg");

bars.addEventListener("click", (e) => {
  ul.classList.toggle("active");
  model.classList.toggle("active");
  e.preventDefault();
});

const modelBg = document.querySelector(".model-buy")
const bookBtn = document.querySelector(".buy");
const close = document.querySelector(".close"); 

bookBtn.addEventListener("click", function (e) {
  modelBg.classList.add("active");
  model.classList.add("active");
  e.preventDefault();
});

close.addEventListener("click", (e) => {
  modelBg.classList.remove("active");
  model.classList.remove("active");
  e.preventDefault();
});



