(function () {
const act = document.querySelector(".active-about");
const abt = document.getElementById("about");
const ftr = document.getElementById("ftr");

var button = document.getElementById("example-three");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    abt.classList.remove('active-about');
    ftr.classList.remove('bio-footer');
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    abt.classList.add('active-about');
    ftr.classList.add('bio-footer');
  }
}, false);

$("#example-four").on("click", function() {
  $(this).toggleClass("on");
});
})();
