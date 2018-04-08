(function () {
  const hdr = document.getElementsByTagName('header');
  const img = document.querySelectorAll('.two');
  const cont = document.getElementsByTagName('div');
  const itm = document.getElementsByClassName('item');
  const topOfWin = hdr.offsetTop;
  const wnhe = window.height;

  function imageHover(e) {
    img.classList.add('front')
  }

  function testTest(e) {
    if(window.scrollY >= 800){
  //    for(i = 5; i < cont.length; i++) {

  //    }
    //  itm[0].classList.add('onion');
    } else {
      //  cont[4].classList.remove('current');
      //  cont[5].classList.add('under');
      }
  }
  window.addEventListener('scroll', testTest);
  console.log(img);
})();

window.sr = ScrollReveal();
//sr.reveal('.wrapper', { duration: 2000 });
sr.reveal('.onion', { duration: 1000 });
sr.reveal('.portfolio-title', { duration: 2000 });
sr.reveal('.img-container', { duration: 2000 });
sr.reveal('p', { duration: 2000 });
sr.reveal('img', { duration: 1000 });
