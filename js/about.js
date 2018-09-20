(function () {
//  const act = document.querySelector('.active-about');
//  const abt = document.getElementById('about');
  //const btn = document.getElementById('btnabt');

//  btn.addEventListener('click', handleEvent, false);

//  function handleEvent (e) {
//    if (e.target === abt[0]) {
//      abt[0].classList.toggle('active-about');
  //  } else if (e.target === btn[0]) {
  //    btn[0].innerText = 'x';
  //  } else {
    //  btn[0].innerText = 'about';
  //  }
  //  else if {
  //    btn[0].innerText = 'x';
  //  }
  //  e.stopPropagation();
//  }
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
