 const $accordionToggle = document.querySelectorAll('.accordion__toggle');

 $accordionToggle.forEach((el) => {
   el.addEventListener('click', (e) => {
   el.classList.contains('menu-info__block--hidden')
     el.parentNode.classList.toggle('menu-info__block--hidden')
     el.classList.contains('accordion__toggle--current')
     el.classList.toggle('accordion__toggle--current')
   });
 });
