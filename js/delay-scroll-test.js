'use strict';

function hasClass(el, className) {
   if (el.classList)
      return el.classList.contains(className);
   else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, classNames) {
   classNames = classNames.split(' ')
   if (el.classList)
      classNames.forEach((classname) => el.classList.add(classname))
   else if (!hasClass(el, className))
      classNames.forEach((classname) => el.className += " " + classname)
}

function removeClass(el, className) {
   if (el.classList)
      el.classList.remove(className);
   else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
   }
}

;(function() {
   let lastAnimation = 0,
      sections = Array.prototype.slice.call(document.querySelectorAll('.portfolio-container')),
      currentSection = 0,
      len = sections.length

   const handleScroll = (e) => {
      e.preventDefault()

      let timeNow = Date.now(),
         delta = e.deltaY,
         newSection

      if (timeNow - lastAnimation < 2000) {
         return;
      }

      if (e.deltaY < 0) {
         // Up
         newSection = (currentSection > 0) ? currentSection - 1 : currentSection
      } else {
         // Down
         newSection = (currentSection < len - 1) ? currentSection + 1 : currentSection
      }

      if (currentSection !== newSection) {
         // newSection is currentSection now
         // And `old` currentSection is previousSection
         if (currentSection < newSection) {
            // Moving Down
            removeClass(sections[newSection], 'under')
            addClass(sections[newSection], 'current')
            removeClass(sections[currentSection], 'current')
            addClass(sections[currentSection], 'above')
         } else {
            // Moving Up
            removeClass(sections[newSection], 'above')
            addClass(sections[newSection], 'current')
            removeClass(sections[currentSection], 'current')
            addClass(sections[currentSection], 'under')
         }

         // Update currentSection
         currentSection = newSection

         sections.forEach((item, index) => {
            // item.style.top = `${(index - currentSection) * 100}vh`
            item.style.transform = `translateY(${(index - currentSection) * 100}vh)`
         })
      }

      lastAnimation = timeNow
   }

   // first-load
   addClass(sections[currentSection], 'current')
   document.addEventListener('keydown', (ev) => {
		if (ev.keyCode === 38 || ev.keyCode === 40) {
			ev.preventDefault()
			return false
		}
	}, false)
   document.addEventListener('wheel', handleScroll)
})()
