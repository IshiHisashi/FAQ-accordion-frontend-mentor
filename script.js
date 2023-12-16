const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const btn = document.querySelectorAll("button");
const detail = document.querySelectorAll(".detail");

btn.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    if (plus[i].classList.contains("hide")) {
      plus[i].classList.remove("hide");
      minus[i].classList.add("hide");
      detail[i].classList.add("hide");
    } else {
      plus[i].classList.add("hide");
      minus[i].classList.remove("hide");
      detail[i].classList.remove("hide");
    }
  });
});
