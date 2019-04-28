(function () {
const act = document.querySelector(".active-about");
const abt = document.querySelector(".about");
const ftr = document.getElementById("ftr");
const title = document.querySelector(".portfolio-title");
const number = document.querySelector(".number");

var button = document.getElementById("example-three");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    abt.classList.remove('active-about');
    ftr.classList.remove('bio-footer');
    title.classList.remove('info');
    number.classList.remove('heart');

  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    abt.classList.add('active-about');
    ftr.classList.add('bio-footer');
    title.classList.add('info');
    number.classList.add('heart');
  }
}, false);

$("#example-four").on("click", function() {
  $(this).toggleClass("on");
});
})();
